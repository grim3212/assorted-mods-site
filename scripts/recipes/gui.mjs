// The recipe backgrounds: the real container GUI textures cropped down to the part that shows a
// recipe (grid, arrow, output), the way JEI does. Slot positions are the menus' slot coordinates
// (the 16x16 item area) made relative to the crop.
//
// Each layout is either a single `crop` of a texture or a `compose` of pieces onto a plain
// GUI-grey canvas, for screens whose recipe slots are too far apart to crop as one piece.
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { createCanvas } from '@napi-rs/canvas'

const GUI_GREY = '#c6c6c6'

// Breathing room around the crop, and a strip under it for the XP and time text.
const PADDING = 6
const FOOTER = 11

const VANILLA = 'minecraft:gui/container/'

export const GUI_LAYOUTS = {
  // CraftingMenu: grid at (30, 17), result at (124, 35); JEI crops (29, 16) 116x54.
  crafting: {
    crop: { texture: VANILLA + 'crafting_table', x: 29, y: 16, width: 116, height: 54 },
    slots: {
      grid: [0, 1, 2].flatMap(row => [0, 1, 2].map(col => [1 + col * 18, 1 + row * 18])),
      result: [95, 19]
    }
  },
  // AbstractFurnaceMenu: input (56, 17), fuel (56, 53), result (116, 35); crop (55, 16) 82x54.
  furnace: furnace('furnace'),
  blast_furnace: furnace('blast_furnace'),
  smoker: furnace('smoker'),
  // StonecutterMenu: input (20, 33) and result (143, 33) sit either side of the recipe list, so
  // the two slots are brought together with the crafting table's arrow between them.
  stonecutter: {
    compose: {
      width: 68,
      height: 24,
      pieces: [
        { texture: VANILLA + 'stonecutter', x: 19, y: 32, width: 18, height: 18, dx: 1, dy: 3 },
        { texture: VANILLA + 'crafting_table', x: 86, y: 30, width: 30, height: 24, dx: 19, dy: 0 },
        { texture: VANILLA + 'stonecutter', x: 142, y: 32, width: 18, height: 18, dx: 49, dy: 3 }
      ]
    },
    slots: { input: [2, 4], result: [50, 4] }
  },
  // SmithingMenu: template (8, 48), base (26, 48), addition (44, 48), result (98, 48).
  smithing: {
    crop: { texture: VANILLA + 'smithing', x: 5, y: 45, width: 113, height: 22 },
    slots: { template: [3, 3], base: [21, 3], addition: [39, 3], result: [93, 3] }
  },
  // GrindingMillContainer: input (51, 27), tool (80, 5), fuel (80, 62), result (115, 27); the
  // mod's JEI category crops (50, 4) 86x75.
  grinding_mill: {
    crop: { texture: 'assortedcore:gui/container/grinding_mill', x: 50, y: 4, width: 86, height: 75 },
    footer: true,
    slots: { input: [1, 23], tool: [30, 1], fuel: [30, 58], result: [65, 23] }
  },
  // AlloyForgeContainer: inputs (32, 27) and (56, 27), fuel (80, 62), result (115, 27); JEI
  // crops (31, 22) 105x57.
  alloy_forge: {
    crop: { texture: 'assortedcore:gui/container/alloy_forge', x: 31, y: 22, width: 105, height: 57 },
    footer: true,
    slots: { input1: [1, 5], input2: [25, 5], fuel: [49, 40], result: [84, 5] }
  }
}

function furnace(texture) {
  return {
    crop: { texture: VANILLA + texture, x: 55, y: 16, width: 82, height: 54 },
    footer: true,
    slots: { input: [1, 1], fuel: [1, 37], result: [61, 19] }
  }
}

// Writes every background PNG into outDir and returns the layouts the component reads.
export async function exportGuis(res, outDir, textures, urlPrefix = '/icons/gui') {
  mkdirSync(outDir, { recursive: true })
  const out = {}
  for (const [name, layout] of Object.entries(GUI_LAYOUTS)) {
    const inner = layout.crop || layout.compose
    const width = inner.width + 2 * PADDING
    const height = inner.height + 2 * PADDING + (layout.footer ? FOOTER : 0)
    const canvas = createCanvas(width, height)
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = GUI_GREY
    ctx.fillRect(0, 0, width, height)
    const pieces = layout.crop ? [{ ...layout.crop, dx: 0, dy: 0 }] : layout.compose.pieces
    for (const piece of pieces) {
      const image = await textures.load(piece.texture)
      if (!image) throw new Error(`missing GUI texture ${piece.texture}`)
      ctx.drawImage(image, piece.x, piece.y, piece.width, piece.height, PADDING + piece.dx, PADDING + piece.dy, piece.width, piece.height)
    }
    writeFileSync(join(outDir, `${name}.png`), canvas.toBuffer('image/png'))
    const shift = point => [point[0] + PADDING, point[1] + PADDING]
    const slots = Object.fromEntries(Object.entries(layout.slots).map(([role, value]) => [role, Array.isArray(value[0]) ? value.map(shift) : shift(value)]))
    out[name] = { image: `${urlPrefix}/${name}.png`, width, height, slots }
  }
  return out
}
