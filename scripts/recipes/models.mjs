// Resolves an item id to the things that draw it: flat texture layers, a block model's cuboids,
// an OBJ mesh or one of the hand-transcribed entity models. Mirrors the client item definition
// format (assets/<ns>/items) and block model inheritance well enough for inventory icons.
import { parseId, normalizeId } from './resources.mjs'

const MAX_TEXTURE_HOPS = 16

export class Models {
  constructor(res) {
    this.res = res
    this.blockModelCache = new Map()
    this.warnings = []
  }

  warn(message) {
    if (!this.warnings.includes(message)) this.warnings.push(message)
  }

  // ---- item definitions -------------------------------------------------------------------

  // Returns the layers that make up an item's inventory icon, in draw order, or [] if nothing
  // is known about the item.
  itemLayers(itemId) {
    const { ns, path } = parseId(itemId)
    const def = this.res.json(`assets/${ns}/items/${path}.json`)
    if (!def) {
      this.warn(`no item definition for ${itemId}`)
      return []
    }
    return this.resolveNode(def.model, itemId)
  }

  resolveNode(node, itemId) {
    if (!node || typeof node !== 'object') return []
    const type = normalizeId(node.type || 'minecraft:model')
    switch (type) {
      case 'minecraft:model':
      case 'assorteddecor:colorizer':
      case 'assortedtech:bridge':
        return [{ type: 'model', model: this.blockModel(node.model), tints: node.tints || [] }]
      case 'assortedtools:fluid_container':
        return [{ type: 'model', model: this.blockModel(node.model), tints: [], fluidContainer: true }]
      case 'minecraft:condition':
        // Every property (using_item, damaged, locked, dyed...) is false for a fresh item.
        return this.resolveNode(node.on_false, itemId)
      case 'minecraft:select': {
        const property = normalizeId(node.property || '')
        if (property === 'minecraft:display_context') {
          const match = (node.cases || []).find(c => [].concat(c.when).includes('gui'))
          if (match) return this.resolveNode(match.model, itemId)
        }
        if (node.fallback) return this.resolveNode(node.fallback, itemId)
        return node.cases?.length ? this.resolveNode(node.cases[0].model, itemId) : []
      }
      case 'minecraft:range_dispatch':
        if (node.fallback) return this.resolveNode(node.fallback, itemId)
        return node.entries?.length ? this.resolveNode(node.entries[0].model, itemId) : []
      case 'minecraft:composite':
        return (node.models || []).flatMap(m => this.resolveNode(m, itemId))
      case 'minecraft:special':
        return [{
          type: 'special',
          base: node.base ? this.blockModel(node.base) : null,
          special: node.model,
          transformation: node.transformation || null
        }]
      case 'minecraft:empty':
      case 'minecraft:bundle/selected_item':
        return []
      default:
        if (typeof node.model === 'string') {
          return [{ type: 'model', model: this.blockModel(node.model), tints: node.tints || [] }]
        }
        this.warn(`unknown item model type ${type} on ${itemId}`)
        return []
    }
  }

  // ---- block/item models ----------------------------------------------------------------

  // A model with its parent chain folded in: textures, elements, display and the custom loader
  // fields the mods use.
  blockModel(modelId) {
    const id = normalizeId(modelId)
    if (this.blockModelCache.has(id)) return this.blockModelCache.get(id)
    const resolved = this.loadModel(id, new Set())
    this.blockModelCache.set(id, resolved)
    return resolved
  }

  loadModel(id, seen) {
    if (seen.has(id)) {
      this.warn(`model parent loop at ${id}`)
      return this.emptyModel(id)
    }
    seen.add(id)
    if (id === 'minecraft:builtin/generated') return { ...this.emptyModel(id), generated: true }
    if (id === 'minecraft:builtin/entity') return { ...this.emptyModel(id), builtinEntity: true }
    const { ns, path } = parseId(id)
    const json = this.res.json(`assets/${ns}/models/${path}.json`)
    if (!json) {
      this.warn(`missing model ${id}`)
      return this.emptyModel(id)
    }
    const parent = json.parent ? this.loadModel(normalizeId(json.parent), seen) : this.emptyModel(null)
    const loader = json.loader || json['fabric:type'] || null
    return {
      id,
      textures: { ...parent.textures, ...(json.textures || {}) },
      elements: json.elements || parent.elements,
      display: { ...parent.display, ...(json.display || {}) },
      guiLight: json.gui_light || parent.guiLight,
      generated: parent.generated || false,
      builtinEntity: parent.builtinEntity || false,
      loader: loader || parent.loader,
      // The colorizer OBJ loader names its mesh in `model`.
      obj: loader === 'assorteddecor:colorizer_obj' ? normalizeId(json.model) : parent.obj
    }
  }

  emptyModel(id) {
    return { id, textures: {}, elements: null, display: {}, guiLight: null, generated: false, builtinEntity: false, loader: null, obj: null }
  }

  // Follows #references to a concrete texture id, or null.
  texture(model, name) {
    let current = name.startsWith('#') ? name.slice(1) : name
    for (let hop = 0; hop < MAX_TEXTURE_HOPS; hop++) {
      let value = model.textures[current]
      // 26.x lets a slot carry material flags: { "sprite": "...", "force_translucent": true }.
      if (value && typeof value === 'object') value = value.sprite
      if (typeof value !== 'string') {
        if (value !== undefined) return null

        // A bare name that is not a slot is itself a texture id (e.g. face.texture = "ns:block/x").
        return current.includes(':') || current.includes('/') ? normalizeId(current) : null
      }
      if (!value.startsWith('#')) return normalizeId(value)
      current = value.slice(1)
    }
    return null
  }

  // Reads an OBJ mesh referenced by a model, as text.
  objText(objId) {
    const { ns, path } = parseId(objId)
    const raw = this.res.read(`assets/${ns}/${path}`)
    return raw ? raw.toString('utf8') : null
  }
}

// The gui entry of a model's display block as { rotation, translation, scale } in radians and
// block units, or null for "no transform" (which Minecraft treats as only centering the model).
export function guiTransform(model) {
  const gui = model?.display?.gui
  if (!gui) return null
  const rotation = (gui.rotation || [0, 0, 0]).map(d => d * Math.PI / 180)
  const translation = (gui.translation || [0, 0, 0]).map(v => Math.max(-5, Math.min(5, v / 16)))
  const scale = (gui.scale || [1, 1, 1]).map(v => Math.max(-4, Math.min(4, v)))
  return { rotation, translation, scale }
}
