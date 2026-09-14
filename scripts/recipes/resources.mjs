// A merged view over every resource source: the mods' resource folders and the game/loader jars.
// Paths are resource-pack style: assets/<ns>/... and data/<ns>/...
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { unzipSync } from 'fflate'

class DirSource {
  constructor(root) {
    this.root = root
    this.name = root
    this.files = new Map()
    for (const top of ['assets', 'data']) {
      const dir = join(root, top)
      if (existsSync(dir)) this.walk(dir)
    }
  }

  walk(dir) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry)
      if (statSync(full).isDirectory()) this.walk(full)
      else this.files.set(relative(this.root, full).split(sep).join('/'), full)
    }
  }

  has(path) { return this.files.has(path) }
  read(path) { return this.files.has(path) ? readFileSync(this.files.get(path)) : null }
  keys() { return this.files.keys() }
}

class ZipSource {
  constructor(file, filter) {
    this.name = file
    const entries = unzipSync(readFileSync(file), { filter: f => filter(f.name) })
    this.files = new Map(Object.entries(entries))
  }

  has(path) { return this.files.has(path) }
  read(path) { return this.files.has(path) ? Buffer.from(this.files.get(path)) : null }
  keys() { return this.files.keys() }
}

export class Resources {
  constructor() {
    this.sources = []
    this.jsonCache = new Map()
  }

  addDir(root) {
    if (existsSync(root)) this.sources.push(new DirSource(root))
    return this
  }

  addZip(file, filter) {
    if (file && existsSync(file)) this.sources.push(new ZipSource(file, filter))
    return this
  }

  has(path) {
    return this.sources.some(s => s.has(path))
  }

  // First source wins, so mods are added before the game jars.
  read(path) {
    for (const source of this.sources) {
      const data = source.read(path)
      if (data) return data
    }
    return null
  }

  // Every copy of a path, for things that merge across packs (tags).
  readAll(path) {
    const out = []
    for (const source of this.sources) {
      const data = source.read(path)
      if (data) out.push(data)
    }
    return out
  }

  json(path) {
    if (this.jsonCache.has(path)) return this.jsonCache.get(path)
    const raw = this.read(path)
    const parsed = raw ? JSON.parse(raw.toString('utf8')) : null
    this.jsonCache.set(path, parsed)
    return parsed
  }

  list(prefix, suffix = '') {
    const out = new Set()
    for (const source of this.sources) {
      for (const key of source.keys()) {
        if (key.startsWith(prefix) && key.endsWith(suffix)) out.add(key)
      }
    }
    return [...out]
  }
}

export function parseId(id, defaultNamespace = 'minecraft') {
  const idx = id.indexOf(':')
  return idx === -1 ? { ns: defaultNamespace, path: id } : { ns: id.slice(0, idx), path: id.slice(idx + 1) }
}

export function idString({ ns, path }) {
  return `${ns}:${path}`
}

export function normalizeId(id) {
  return idString(parseId(id))
}

// Only the parts of a jar the exporter reads, to keep memory sensible.
export function gameJarFilter(name) {
  return (
    name.startsWith('assets/minecraft/items/')
    || name.startsWith('assets/minecraft/models/')
    || name.startsWith('assets/minecraft/textures/block/')
    || name.startsWith('assets/minecraft/textures/item/')
    || name.startsWith('assets/minecraft/textures/entity/chest/')
    || name.startsWith('assets/minecraft/textures/entity/shulker/')
    || name.startsWith('assets/minecraft/textures/gui/container/')
    || name === 'assets/minecraft/lang/en_us.json'
    || name.startsWith('data/minecraft/tags/item/')
  )
}

export function loaderJarFilter(name) {
  return name.startsWith('data/c/tags/item/') || name.startsWith('data/neoforge/tags/item/')
}
