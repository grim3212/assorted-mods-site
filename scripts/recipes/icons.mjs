// Picks the icon PNG for an item out of the mods' icon exports (see IconExporter in AssortedLib:
// `./gradlew :neoforge:runExportIcons` in a mod checkout renders every loaded item the way the
// inventory draws it into neoforge/build/icons) and copies it into the site. Nothing is rendered
// here; an item the exports do not have is a warning, and a component-dependent variant the
// exports do not have yet is written to the stacks file for the next export run to pick up.
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { normalizeId, parseId } from './resources.mjs'

export class Icons {
  // exportDirs: the mods' icon export directories, each holding icons.json and the PNGs.
  // stacksFile: where the variant stacks the exports still need are written.
  constructor({ exportDirs, outDir, overridesDir, stacksFile, dryRun = false, urlPrefix = '/icons' }) {
    this.outDir = outDir
    this.overridesDir = overridesDir
    this.stacksFile = stacksFile
    this.dryRun = dryRun
    this.urlPrefix = urlPrefix
    this.cache = new Map()
    this.stacks = new Map()
    this.warnings = []
    this.sources = []
    for (const dir of exportDirs) {
      const manifest = join(dir, 'icons.json')
      if (!existsSync(manifest)) continue
      const json = JSON.parse(readFileSync(manifest, 'utf8'))
      // A mod's own export is the one to trust for its namespace: it is the only run that had
      // that mod loaded, and any other export is from a checkout that may be older.
      this.sources.push({ dir, mod: basename(dirname(dirname(dir))).toLowerCase(), icons: json.icons || {} })
    }
    if (!this.sources.length) this.warn('no icon exports found; run `./gradlew :neoforge:runExportIcons` in the mod checkouts')
  }

  warn(message) {
    if (!this.warnings.includes(message)) this.warnings.push(message)
  }

  static variantKey(variant) {
    if (!variant) return ''
    return '--' + Object.entries(variant).map(([k, v]) => `${k}-${v}`).join('-').replace(/[^a-z0-9_-]/gi, '_')
  }

  // The exported icon for a key, preferring the namespace's own mod.
  find(key) {
    const { ns } = parseId(key)
    const own = this.sources.find(s => s.mod === ns && s.icons[key])
    const source = own || this.sources.find(s => s.icons[key])
    return source ? { ...source.icons[key], dir: source.dir } : null
  }

  // Returns { src, pixelated } or null when there is no icon. `variant` names the icon file
  // (`--color-orange`) and `components` is what the exporter needs to render it.
  icon(itemId, variant = null, components = null) {
    const id = normalizeId(itemId)
    const key = id + Icons.variantKey(variant)
    if (variant) this.stacks.set(key, { key, stack: { id, components } })
    if (this.cache.has(key)) return this.cache.get(key)
    const result = this.produce(key)
    this.cache.set(key, result)
    return result
  }

  produce(key) {
    const rel = key.replace(':', '/') + '.png'
    const src = `${this.urlPrefix}/${rel}`
    const override = join(this.overridesDir, rel)
    if (existsSync(override)) {
      this.copy(override, rel)
      return { src, pixelated: true }
    }
    const found = this.find(key)
    if (!found) {
      this.warn(`no icon for ${key}`)
      return null
    }
    this.copy(join(found.dir, found.file), rel)
    // Flat items are nearest-neighbour scaled by the page so their pixels stay crisp; models
    // are downscaled smoothly, the way the game's own GUI scale would draw them.
    return { src, pixelated: !!found.flat }
  }

  copy(from, rel) {
    if (this.dryRun) return
    const target = join(this.outDir, rel)
    mkdirSync(dirname(target), { recursive: true })
    copyFileSync(from, target)
  }

  // Every icon that came out of this run, relative to outDir.
  files() {
    return [...this.cache.values()].filter(Boolean).map(i => i.src.replace(`${this.urlPrefix}/`, ''))
  }

  // The stacks file the exporter reads for component-dependent icons. Written whether or not
  // they were all found, so it always describes what the pages need.
  writeStacks() {
    const list = [...this.stacks.values()].sort((a, b) => a.key.localeCompare(b.key))
    writeFileSync(this.stacksFile, JSON.stringify(list, null, 2) + '\n')
  }
}
