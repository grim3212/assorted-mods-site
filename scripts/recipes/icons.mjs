// Produces the icon PNG for an item and remembers where it went. Flat items are copied at their
// native texture size (the page scales them with image-rendering: pixelated); everything with
// geometry is rendered at a fixed size.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { loadImage } from '@napi-rs/canvas'
import { ENTITY_MODELS, specialTextures } from './entity-models.mjs'
import { guiTransform } from './models.mjs'
import { parseObj } from './obj.mjs'
import { applyTransformation, elementQuads, entityQuads, objQuads, renderFlat, renderIcon } from './render.mjs'
import { normalizeId, parseId } from './resources.mjs'

// DyeColor -> MapColor.col, which is what the siding tint uses.
const DYE_MAP_COLORS = {
  white: 0xFFFFFF, orange: 0xD87F33, magenta: 0xB24CD8, light_blue: 0x6699D8, yellow: 0xE5E533,
  lime: 0x7FCC19, pink: 0xF27FA5, gray: 0x4C4C4C, light_gray: 0x999999, cyan: 0x4C7F99,
  purple: 0x7F3FB2, blue: 0x334CB2, brown: 0x664C33, green: 0x667F33, red: 0x993333, black: 0x191919
}

function rgb(int) {
  return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255]
}

// The colour a tint source gives a fresh item. Anything stack-dependent is white.
function tintColor(source, variant) {
  if (!source) return null
  const type = normalizeId(source.type || '')
  switch (type) {
    case 'minecraft:constant':
      return rgb(source.value ?? 0xFFFFFF)
    case 'minecraft:dye':
    case 'minecraft:potion':
    case 'minecraft:map_color':
    case 'minecraft:firework':
    case 'minecraft:team':
    case 'minecraft:custom_model_data':
      return source.default !== undefined ? rgb(source.default) : null
    case 'minecraft:grass':
      return rgb(0x79C05A)
    case 'assorteddecor:siding':
      return variant?.color && DYE_MAP_COLORS[variant.color] !== undefined ? rgb(DYE_MAP_COLORS[variant.color]) : null
    default:
      return null
  }
}

export class Icons {
  constructor({ res, models, textures, outDir, overridesDir, renderSize, urlPrefix = '/icons' }) {
    this.res = res
    this.models = models
    this.textures = textures
    this.outDir = outDir
    this.overridesDir = overridesDir
    this.renderSize = renderSize
    this.urlPrefix = urlPrefix
    this.cache = new Map()
    this.warnings = []
  }

  warn(message) {
    if (!this.warnings.includes(message)) this.warnings.push(message)
  }

  static variantKey(variant) {
    if (!variant) return ''
    return '--' + Object.entries(variant).map(([k, v]) => `${k}-${v}`).join('-').replace(/[^a-z0-9_-]/gi, '_')
  }

  // Returns { src, pixelated } or null when the item cannot be drawn. `pixelated` marks a flat
  // texture kept at its native size, which the page scales with image-rendering: pixelated.
  async icon(itemId, variant = null) {
    const id = normalizeId(itemId)
    const key = id + Icons.variantKey(variant)
    if (this.cache.has(key)) return this.cache.get(key)
    const result = await this.produce(id, variant)
    this.cache.set(key, result)
    return result
  }

  async produce(id, variant) {
    const { ns, path } = parseId(id)
    const rel = `${ns}/${path}${Icons.variantKey(variant)}.png`
    const target = join(this.outDir, rel)
    const src = `${this.urlPrefix}/${rel}`

    // A hand-provided icon wins over the renderer.
    const override = join(this.overridesDir, rel)
    if (existsSync(override)) {
      const data = readFileSync(override)
      const image = await loadImage(data)
      mkdirSync(dirname(target), { recursive: true })
      writeFileSync(target, data)
      return { src, pixelated: image.width <= 64 }
    }

    const layers = await this.renderLayers(id, variant)
    if (!layers.length) {
      this.warn(`no icon for ${id}`)
      return null
    }
    let canvas
    let pixelated
    if (layers.every(l => l.kind === 'flat')) {
      canvas = renderFlat(layers.flatMap(l => l.layers))
      pixelated = true
    }
    else {
      canvas = renderIcon(layers, this.renderSize)
      pixelated = false
    }
    mkdirSync(dirname(target), { recursive: true })
    writeFileSync(target, canvas.toBuffer('image/png'))
    return { src, pixelated }
  }

  async renderLayers(id, variant) {
    const out = []
    for (const layer of this.models.itemLayers(id)) {
      if (layer.type === 'model') {
        const built = await this.modelLayer(layer, id, variant)
        if (built) out.push(built)
      }
      else if (layer.type === 'special') {
        const built = await this.specialLayer(layer, id)
        if (built) out.push(built)
      }
    }
    return out
  }

  async modelLayer(layer, id, variant) {
    const model = layer.model
    const tints = layer.tints || []
    const tintFor = index => tintColor(tints[index], variant)

    if (model.obj) {
      const text = this.models.objText(model.obj)
      if (!text) {
        this.warn(`missing obj ${model.obj} for ${id}`)
        return null
      }
      const textureId = this.models.texture(model, 'particle') || 'assorteddecor:block/colorizer'
      const image = await this.textures.load(textureId)
      if (!image) return null
      return { kind: 'quads', quads: objQuads(parseObj(text), image), gui: guiTransform(model), light: '3d' }
    }

    if (model.elements && model.elements.length) {
      const images = new Map()
      for (const element of model.elements) {
        for (const face of Object.values(element.faces || {})) {
          if (!images.has(face.texture)) {
            const textureId = this.models.texture(model, face.texture)
            images.set(face.texture, textureId ? await this.textures.load(textureId) : null)
          }
        }
      }
      const quads = elementQuads(model.elements, name => images.get(name) || null, tintFor)
      if (!quads.length) return null
      return { kind: 'quads', quads, gui: guiTransform(model), light: model.guiLight === 'front' ? 'flat' : '3d' }
    }

    // Flat: item/generated layers, or an empty bucket (its cover only matters over a fluid).
    let names
    if (layer.fluidContainer || (model.textures.base && !model.textures.layer0)) {
      names = ['base']
    }
    else {
      names = Object.keys(model.textures).filter(n => /^layer\d+$/.test(n)).sort((a, b) => Number(a.slice(5)) - Number(b.slice(5)))
    }
    const flat = []
    for (const name of names) {
      const textureId = this.models.texture(model, name)
      const image = textureId ? await this.textures.load(textureId) : null
      if (!image) continue
      const index = name.startsWith('layer') ? Number(name.slice(5)) : -1
      flat.push({ image, tint: index >= 0 ? tintFor(index) : null })
    }
    if (!flat.length) {
      this.warn(`nothing to draw for ${id} (model ${model.id})`)
      return null
    }
    return { kind: 'flat', layers: flat }
  }

  async specialLayer(layer, id) {
    const special = layer.special || {}
    const info = specialTextures({ ...special, type: normalizeId(special.type || '') })
    const spec = info && ENTITY_MODELS[info.model]
    if (!spec) {
      this.warn(`unsupported special model ${special.type} for ${id}`)
      return null
    }
    const images = []
    for (const textureId of info.layers) {
      const image = await this.textures.load(textureId)
      if (image) images.push(image)
    }
    if (!images.length) return null
    let quads = entityQuads(spec, images)
    quads = applyTransformation(quads, layer.transformation)
    return { kind: 'quads', quads, gui: guiTransform(layer.base), light: '3d' }
  }
}
