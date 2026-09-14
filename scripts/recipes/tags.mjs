// Item tag resolution across every source (mods, vanilla, loader conventions). Tags merge by
// union, nested #tags expand recursively, and optional entries that point nowhere are dropped.
import { normalizeId, parseId } from './resources.mjs'

export class Tags {
  constructor(res) {
    this.res = res
    this.cache = new Map()
  }

  static path(tagId) {
    const { ns, path } = parseId(tagId)
    return `data/${ns}/tags/item/${path}.json`
  }

  exists(tagId) {
    return this.res.has(Tags.path(tagId))
  }

  // Item ids in the tag, in first-seen order.
  items(tagId, seen = new Set()) {
    const id = normalizeId(tagId)
    if (this.cache.has(id)) return this.cache.get(id)
    if (seen.has(id)) return []
    seen.add(id)
    const out = []
    const push = (item) => {
      if (!out.includes(item)) out.push(item)
    }
    for (const raw of this.res.readAll(Tags.path(id))) {
      const json = JSON.parse(raw.toString('utf8'))
      for (const entry of json.values || []) {
        const value = typeof entry === 'string' ? entry : entry.id
        const required = typeof entry === 'string' ? true : entry.required !== false
        if (value.startsWith('#')) {
          const nested = value.slice(1)
          if (!required && !this.exists(nested)) continue
          this.items(nested, seen).forEach(push)
        }
        else {
          push(normalizeId(value))
        }
      }
    }
    // Vanilla items first, so a cycling slot opens on the familiar item (a dye before a mod's
    // paint roller that is also tagged as one). The sort is stable, so nothing else reorders.
    out.sort((a, b) => Number(!a.startsWith('minecraft:')) - Number(!b.startsWith('minecraft:')))
    this.cache.set(id, out)
    return out
  }
}
