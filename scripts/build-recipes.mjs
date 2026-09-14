#!/usr/bin/env node
// Exports every recipe the site pages reference into app/data/recipes and copies the item icons
// they need into public/icons. Reads the sibling mod checkouts (recipes, tags, lang and their
// icon exports) plus the Minecraft client and NeoForge jars from the gradle cache (see
// scripts/recipes/config.mjs for overrides).
//
//   yarn recipes            export everything the pages use
//   yarn recipes --check    only report what would be exported and any problems
//
// The icons come from the mods' own exports: `./gradlew :neoforge:runExportIcons` in a mod
// checkout has the game render every item it loads into neoforge/build/icons. Rerun that in a
// mod whenever its models change, then this.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, sep } from 'node:path'
import * as cfg from './recipes/config.mjs'
import { exportGuis } from './recipes/gui.mjs'
import { Icons } from './recipes/icons.mjs'
import { RecipeExporter } from './recipes/recipes.mjs'
import { Resources, gameJarFilter, loaderJarFilter, normalizeId, parseId } from './recipes/resources.mjs'
import { Tags } from './recipes/tags.mjs'
import { Textures } from './recipes/textures.mjs'

const checkOnly = process.argv.includes('--check')

function walk(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, out)
    else out.push(full)
  }
  return out
}

// Every <Recipe id="ns:path"> on the pages, in page order.
function referencedRecipes() {
  const ids = []
  for (const file of walk(cfg.pagesDir).filter(f => f.endsWith('.vue'))) {
    const text = readFileSync(file, 'utf8')
    for (const match of text.matchAll(/<Recipe\b[^>]*\bid="([^"]+)"/g)) {
      const id = normalizeId(match[1])
      if (!ids.includes(id)) ids.push(id)
    }
  }
  return ids
}

function loadRecipe(res, id) {
  const { ns, path } = parseId(id)
  const extra = join(cfg.extraRecipesDir, ns, `${path}.json`)
  if (existsSync(extra)) return JSON.parse(readFileSync(extra, 'utf8'))
  return res.json(`data/${ns}/recipe/${path}.json`)
}

async function main() {
  if (!cfg.clientJar) {
    console.error('Minecraft client jar not found; set MC_CLIENT_JAR.')
    process.exit(1)
  }
  const res = new Resources()
  for (const mod of cfg.mods) {
    const src = join(cfg.modsRoot, mod, 'common', 'src')
    res.addDir(join(src, 'main', 'resources'))
    res.addDir(join(src, 'generated', 'client'))
    res.addDir(join(src, 'generated', 'server'))
    res.addDir(join(src, 'generated', 'resources'))
  }
  res.addZip(cfg.clientJar, gameJarFilter)
  res.addZip(cfg.neoforgeJar, loaderJarFilter)
  if (!cfg.neoforgeJar) console.warn('NeoForge jar not found; c: tags will be incomplete.')

  // Lang: vanilla first, then every mod (later wins, and mods never collide with vanilla keys).
  const lang = {}
  for (const path of res.list('assets/', '/lang/en_us.json')) {
    for (const raw of res.readAll(path).reverse()) Object.assign(lang, JSON.parse(raw.toString('utf8')))
  }

  const textures = new Textures(res)
  const tags = new Tags(res)
  const icons = new Icons({ exportDirs: cfg.iconExportDirs, outDir: cfg.iconDir, overridesDir: cfg.iconOverridesDir, stacksFile: cfg.iconStacksFile, dryRun: checkOnly })
  const exporter = new RecipeExporter({ res, tags, icons, lang })

  const ids = referencedRecipes()
  const exported = new Map()
  const missing = []
  for (const id of ids) {
    const json = loadRecipe(res, id)
    if (!json) {
      missing.push(id)
      continue
    }
    const converted = await exporter.convert(id, json)
    if (converted) exported.set(id, converted)
  }

  // The GUI backgrounds the component draws the slots on.
  const guiOut = checkOnly ? join(cfg.siteRoot, 'node_modules', '.cache', 'recipe-gui') : join(cfg.iconDir, 'gui')
  const guis = await exportGuis(res, guiOut, textures)

  if (!checkOnly) {
    rmSync(cfg.recipeDataDir, { recursive: true, force: true })
    writeFileSync(cfg.guiDataFile, JSON.stringify(guis, null, 2) + '\n')
    for (const [id, data] of exported) {
      const { ns, path } = parseId(id)
      const file = join(cfg.recipeDataDir, ns, `${path}.json`)
      mkdirSync(dirname(file), { recursive: true })
      writeFileSync(file, JSON.stringify(data, null, 2) + '\n')
    }
    icons.writeStacks()
    // Drop icons nothing references any more.
    const wanted = new Set(icons.files())
    for (const gui of Object.values(guis)) wanted.add(gui.image.replace(/^\/icons\//, ''))
    for (const file of walk(cfg.iconDir)) {
      const rel = relative(cfg.iconDir, file).split(sep).join('/')
      if (!wanted.has(rel)) rmSync(file)
    }
  }

  const warnings = [
    ...missing.map(id => `recipe not found: ${id}`),
    ...exporter.warnings,
    ...icons.warnings,
    ...[...textures.missing].map(t => `missing texture ${t}`)
  ]
  console.log(`${exported.size} recipes from ${ids.length} references, ${icons.files().length} icons`)
  if (warnings.length) {
    console.log(`${warnings.length} warning(s):`)
    for (const w of warnings) console.log('  - ' + w)
  }
  if (missing.length) process.exitCode = 1
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
