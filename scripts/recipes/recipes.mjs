// Converts a game recipe JSON into the shape the site's Recipe component renders: resolved
// ingredient lists with names and icons, and a type the component knows how to lay out.
import { normalizeId, parseId } from './resources.mjs'

const COOKING_DEFAULT_TIME = { 'minecraft:smelting': 200, 'minecraft:blasting': 100, 'minecraft:smoking': 100, 'minecraft:campfire_cooking': 600 }

const TYPE_INFO = {
  'minecraft:crafting_shaped': { kind: 'shaped', label: 'Shaped crafting', station: 'Crafting Table', gui: 'crafting' },
  'minecraft:crafting_shapeless': { kind: 'shapeless', label: 'Shapeless crafting', station: 'Crafting Table', gui: 'crafting' },
  'assortedstorage:locked_upgrading': { kind: 'shaped', label: 'Shaped crafting', station: 'Crafting Table', gui: 'crafting', keeps: 'Keeps the lock, code and contents of the storage being upgraded.' },
  'minecraft:smelting': { kind: 'cooking', label: 'Smelting', station: 'Furnace', gui: 'furnace' },
  'minecraft:blasting': { kind: 'cooking', label: 'Blasting', station: 'Blast Furnace', gui: 'blast_furnace' },
  'minecraft:smoking': { kind: 'cooking', label: 'Smoking', station: 'Smoker', gui: 'smoker' },
  'minecraft:campfire_cooking': { kind: 'cooking', label: 'Campfire cooking', station: 'Campfire', gui: 'furnace' },
  'minecraft:stonecutting': { kind: 'stonecutting', label: 'Stonecutting', station: 'Stonecutter', gui: 'stonecutter' },
  'minecraft:smithing_transform': { kind: 'smithing', label: 'Smithing', station: 'Smithing Table', gui: 'smithing' },
  'assortedcore:grinding_mill': { kind: 'grinding_mill', label: 'Grinding', station: 'Grinding Mill', gui: 'grinding_mill' },
  'assortedcore:alloy_forge': { kind: 'alloy_forge', label: 'Alloying', station: 'Alloy Forge', gui: 'alloy_forge' }
}

function humanize(path) {
  return path.replace(/[_/]+/g, ' ').trim()
}

// "c:ingots/iron" -> "iron ingots", "minecraft:planks" -> "planks"
function tagLabel(tagId) {
  const { path } = parseId(tagId)
  const parts = path.split('/')
  if (parts.length >= 2) return humanize(`${parts[parts.length - 1]} ${parts.slice(0, -1).join(' ')}`)
  return humanize(path)
}

export class RecipeExporter {
  constructor({ res, tags, icons, lang }) {
    this.res = res
    this.tags = tags
    this.icons = icons
    this.lang = lang
    this.warnings = []
  }

  warn(message) {
    if (!this.warnings.includes(message)) this.warnings.push(message)
  }

  itemName(itemId) {
    const { ns, path } = parseId(itemId)
    return this.lang[`item.${ns}.${path}`] || this.lang[`block.${ns}.${path}`] || humanize(path).replace(/\b\w/g, c => c.toUpperCase())
  }

  // `variant` names a component-dependent icon and `components` is what renders it.
  async item(itemId, variant = null, components = null) {
    const id = normalizeId(itemId)
    return { id, name: this.itemName(id), icon: this.icons.icon(id, variant, components) }
  }

  async items(ids) {
    const out = []
    for (const id of ids) out.push(await this.item(id))
    return out
  }

  // An ingredient in any of the forms recipes use. Returns a slot or null for "empty".
  async ingredient(raw, count = 1) {
    if (raw === undefined || raw === null || raw === '' || raw === ' ') return null
    if (Array.isArray(raw)) {
      if (!raw.length) return null
      const parts = []
      for (const entry of raw) {
        const slot = await this.ingredient(entry)
        if (slot) parts.push(slot)
      }
      const items = parts.flatMap(p => p.items).filter((it, i, all) => all.findIndex(o => o.id === it.id) === i)
      return { kind: parts.length === 1 ? parts[0].kind : 'items', tag: parts.length === 1 ? parts[0].tag : undefined, label: parts.length === 1 ? parts[0].label : 'One of several items', count, items }
    }
    if (typeof raw === 'string') {
      if (raw.startsWith('#')) return this.tagSlot(raw.slice(1), count)
      return { kind: 'item', count, items: [await this.item(raw)] }
    }
    if (typeof raw === 'object') {
      const type = raw['neoforge:ingredient_type'] || raw['fabric:type'] || raw.type
      if (type) {
        switch (normalizeId(type)) {
          case 'assortedlib:stored_fluid_ingredient':
            return this.fluidSlot(raw.fluid, count)
          case 'neoforge:difference': {
            const base = await this.ingredient(raw.base)
            const subtracted = await this.ingredient(raw.subtracted)
            const removed = new Set((subtracted?.items || []).map(i => i.id))
            return { ...base, count, items: base.items.filter(i => !removed.has(i.id)), note: subtracted ? `Excluding ${subtracted.label || 'some items'}.` : undefined }
          }
          case 'neoforge:compound':
          case 'neoforge:union':
            return this.ingredient(raw.children || raw.ingredients || [], count)
          case 'neoforge:intersection':
            return this.ingredient(raw.children?.[0], count)
          case 'minecraft:item':
          case 'neoforge:item':
            return this.ingredient(raw.item, count)
          case 'minecraft:tag':
          case 'neoforge:tag':
            return this.ingredient('#' + raw.tag, count)
          default:
            this.warn(`unknown ingredient type ${type}`)
            return { kind: 'unknown', count, label: humanize(String(type)), items: [] }
        }
      }
      if (raw.ingredient !== undefined) return this.ingredient(raw.ingredient, raw.count ?? count)
      if (raw.item) return this.ingredient(raw.item, count)
      if (raw.tag) return this.ingredient('#' + raw.tag, count)
    }
    this.warn(`unreadable ingredient ${JSON.stringify(raw)}`)
    return null
  }

  async tagSlot(tagId, count = 1) {
    const id = normalizeId(tagId)
    const ids = this.tags.items(id)
    if (!ids.length) this.warn(`empty tag ${id}`)
    return { kind: 'tag', tag: id, label: tagLabel(id), count, items: await this.items(ids) }
  }

  async fluidSlot(fluidId, count = 1) {
    const fluid = normalizeId(fluidId || 'minecraft:water')
    const { path } = parseId(fluid)
    const bucket = `minecraft:${path}_bucket`
    const items = this.icons.find(bucket) ? [await this.item(bucket)] : []
    const name = this.itemName(fluid)
    return {
      kind: 'fluid',
      fluid,
      label: `${name} (any container)`,
      note: `Any item holding ${name.toLowerCase()} works, such as a ${name} Bucket. The container is given back.`,
      count,
      items
    }
  }

  async result(raw) {
    if (!raw) return null
    const id = typeof raw === 'string' ? raw : raw.id || raw.item
    const count = typeof raw === 'string' ? 1 : raw.count ?? 1
    const components = typeof raw === 'object' ? raw.components : undefined
    const color = components?.['minecraft:block_state']?.color
    const variant = color ? { color } : null
    const item = await this.item(id, variant, variant ? components : null)
    if (color) item.name = `${humanize(color).replace(/\b\w/g, c => c.toUpperCase())} ${item.name}`
    return { kind: 'item', count, items: [item] }
  }

  // The site format for one recipe JSON. `site` carries hand-written extras (note, label).
  async convert(recipeId, json) {
    const type = normalizeId(json.type)
    const info = TYPE_INFO[type]
    if (!info) {
      this.warn(`unsupported recipe type ${type} (${recipeId})`)
      return null
    }
    const site = json.site || {}
    const out = {
      id: recipeId,
      type: info.kind,
      typeLabel: site.typeLabel || info.label,
      station: info.station,
      gui: info.gui,
      result: await this.result(json.result),
      note: [info.keeps, site.note].filter(Boolean).join(' ') || undefined
    }
    switch (info.kind) {
      case 'shaped': {
        const pattern = json.pattern || []
        const height = pattern.length
        const width = Math.max(0, ...pattern.map(r => r.length))
        const slots = []
        const keyCache = new Map()
        for (const row of pattern) {
          for (let x = 0; x < width; x++) {
            const ch = row[x] ?? ' '
            if (ch === ' ') {
              slots.push(null)
              continue
            }
            if (!keyCache.has(ch)) keyCache.set(ch, await this.ingredient(json.key?.[ch]))
            slots.push(keyCache.get(ch))
          }
        }
        out.grid = { width, height, slots }
        break
      }
      case 'shapeless': {
        const slots = []
        for (const ing of json.ingredients || []) slots.push(await this.ingredient(ing))
        out.ingredients = slots.filter(Boolean)
        break
      }
      case 'cooking':
        out.input = await this.ingredient(json.ingredient)
        out.fuel = await this.fuelSlot()
        out.experience = json.experience ?? 0
        out.time = (json.cookingtime ?? COOKING_DEFAULT_TIME[type] ?? 200) / 20
        break
      case 'stonecutting':
        out.input = await this.ingredient(json.ingredient)
        break
      case 'smithing':
        out.template = await this.ingredient(json.template)
        out.base = await this.ingredient(json.base)
        out.addition = await this.ingredient(json.addition)
        break
      case 'grinding_mill':
        out.input = await this.ingredient(json.ingredient)
        out.tool = { kind: 'items', label: 'an iron pickaxe or better', note: 'Any pickaxe of iron tier or better, including the ones other mods add. It is not used up.', count: 1, items: await this.items(['minecraft:iron_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:netherite_pickaxe']) }
        out.fuel = await this.fuelSlot()
        out.experience = json.experience ?? 0
        out.time = (json.cookingtime ?? 200) / 20
        break
      case 'alloy_forge':
        out.inputs = [await this.ingredient(json.ingredient1), await this.ingredient(json.ingredient2)]
        out.fuel = await this.fuelSlot()
        out.experience = json.experience ?? 0
        out.time = (json.cookingtime ?? 200) / 20
        break
    }
    return out
  }

  async fuelSlot() {
    return { kind: 'items', label: 'any furnace fuel', note: 'Anything a furnace burns, such as coal, charcoal, wood or a lava bucket.', count: 1, items: await this.items(['minecraft:coal', 'minecraft:charcoal', 'minecraft:coal_block', 'minecraft:lava_bucket', 'minecraft:blaze_rod']) }
  }
}
