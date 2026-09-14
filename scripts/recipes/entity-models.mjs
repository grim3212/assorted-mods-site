// Block entity style models that items draw through a special renderer. These are transcribed
// from the Java LayerDefinitions (vanilla ChestModel/ShulkerModel and AssortedStorage's models),
// posed the way the item renderer shows them: closed, unlocked, nothing animated.
//
// Coordinates are the Java ones: 1/16 block units, y up, boxes as [x, y, z] + [w, h, d], and
// texOffs/texSize in texture pixels. `visible: false` parts are the ones setupAnim hides for an
// unlocked closed item (locks) or that sit inside the body (walls only seen with doors open).

const box = (uv, from, size, extra = {}) => ({ uv, from, size, ...extra })

const LEGS = [
  box([0, 0], [0, 0, 0], [3, 3, 3]),
  box([0, 0], [13, 0, 0], [3, 3, 3]),
  box([0, 0], [13, 0, 13], [3, 3, 3]),
  box([0, 0], [0, 0, 13], [3, 3, 3])
]

export const ENTITY_MODELS = {
  // net.minecraft.client.model.object.chest.ChestModel#createSingleBodyLayer
  'minecraft:chest': {
    texSize: [64, 64],
    parts: [
      { name: 'bottom', boxes: [box([0, 19], [1, 0, 1], [14, 10, 14])] },
      { name: 'lid', offset: [0, 9, 1], boxes: [box([0, 0], [1, 0, 0], [14, 5, 14])] },
      { name: 'lock', offset: [0, 9, 1], boxes: [box([0, 0], [7, -2, 14], [2, 4, 1])] }
    ]
  },

  // ShulkerModel#createShulkerBoxLayer. The item renderer flips it (see the item definition's
  // transformation) because the mob model is authored y-down.
  'minecraft:shulker_box': {
    texSize: [64, 64],
    parts: [
      { name: 'lid', offset: [0, 24, 0], boxes: [box([0, 0], [-8, -16, -8], [16, 12, 16])] },
      { name: 'base', offset: [0, 24, 0], boxes: [box([0, 28], [-8, -8, -8], [16, 8, 16])] }
    ]
  },

  // AssortedStorage ShulkerBoxModel: vanilla plus a padlock that only shows when locked.
  'assortedstorage:locked_shulker_box': {
    texSize: [64, 64],
    parts: [
      { name: 'lid', offset: [0, 24, 0], boxes: [box([0, 0], [-8, -16, -8], [16, 12, 16])] },
      { name: 'base', offset: [0, 24, 0], boxes: [box([0, 28], [-8, -8, -8], [16, 8, 16])] },
      {
        name: 'lock',
        visible: false,
        boxes: [
          box([0, 24], [-8.2, 12, -2], [0.2, 6, 4]),
          box([0, 24], [8.2, 12, -2], [0.2, 6, 4]),
          box([0, 28], [-2, 12, -8.2], [4, 6, 0]),
          box([0, 28], [-2, 12, 8.2], [4, 6, 0])
        ]
      }
    ]
  },

  // AssortedStorage ChestModel: vanilla chest body, a hasp when unlocked, a padlock when locked.
  'assortedstorage:chest': {
    texSize: [64, 64],
    parts: [
      {
        name: 'main',
        boxes: [box([0, 19], [1, 0, 1], [14, 10, 14])],
        children: [{ name: 'lid', offset: [0, 9, 1], boxes: [box([0, 0], [1, 0, 0], [14, 5, 14])] }]
      },
      { name: 'unlocked', offset: [0, 8, 0], boxes: [box([0, 9], [7, -1, 15], [2, 4, 1])] },
      {
        name: 'lock',
        visible: false,
        offset: [0, 8, 0],
        boxes: [
          box([1, 7], [7, 3, 15], [2, 1, 1]),
          box([0, 4], [6, 0, 15], [1, 3, 1]),
          box([0, 4], [9, 0, 15], [1, 3, 1]),
          box([0, 0], [6, -3, 15], [4, 3, 1])
        ]
      }
    ]
  },

  // AssortedStorage WarehouseCrateModel.
  'assortedstorage:warehouse_crate': {
    texSize: [64, 94],
    parts: [
      {
        name: 'main',
        boxes: [box([0, 0], [1, 1, 1], [1, 14, 14])],
        children: [
          { name: 'wall2', boxes: [box([0, 0], [14, 1, 1], [1, 14, 14])] },
          { name: 'wall3', boxes: [box([0, 28], [2, 1, 1], [12, 14, 1])] },
          { name: 'wall4', boxes: [box([0, 28], [2, 1, 14], [12, 14, 1])] },
          { name: 'wall5', boxes: [box([0, 43], [2, 1, 2], [12, 1, 12])] },
          { name: 'bar1', boxes: [box([30, 0], [0, 0.01, 0], [2, 15, 2])] },
          { name: 'bar2', boxes: [box([30, 0], [14, 0.01, 14], [2, 15, 2])] },
          { name: 'bar3', boxes: [box([30, 0], [0, 0.01, 14], [2, 15, 2])] },
          { name: 'bar4', boxes: [box([30, 0], [14, 0.01, 0], [2, 15, 2])] },
          { name: 'bar5', boxes: [box([30, 17], [2, 0, 0], [12, 2, 2])] },
          { name: 'bar6', boxes: [box([30, 17], [2, 0, 14], [12, 2, 2])] },
          { name: 'bar7', boxes: [box([30, 21], [0, 0, 2], [2, 2, 12])] },
          { name: 'bar8', boxes: [box([30, 21], [14, 0, 2], [2, 2, 12])] },
          { name: 'bar9', offset: [1.5, 2.25, 0.01], rotation: [0, 0, -45], boxes: [box([0, 56], [0, 0, 0], [2, 18, 1])] },
          { name: 'bar10', offset: [13, 0.85, 14.99], rotation: [0, 0, 45], boxes: [box([0, 56], [0, 0, 0], [2, 18, 1])] },
          { name: 'bar11', offset: [0.01, 2.25, 1.5], rotation: [45, 0, 0], boxes: [box([6, 56], [0, 0, 0], [1, 18, 2])] },
          { name: 'bar12', offset: [14.99, 0.85, 13], rotation: [-45, 0, 0], boxes: [box([6, 56], [0, 0, 0], [1, 18, 2])] },
          { name: 'bar13', offset: [1, 0.01, 2], rotation: [135, 0, 90], boxes: [box([6, 56], [0, 0, 0], [1, 18, 2])] }
        ]
      },
      { name: 'lid', offset: [0, 14, 0], boxes: [box([0, 76], [0.01, 0, 0.01], [16, 2, 16])] },
      { name: 'lock', visible: false, offset: [6.5, 14, 0], boxes: [box([56, 0], [0, -4, 15.05], [3, 6, 1], { mirror: true })] }
    ]
  },

  // AssortedStorage CabinetModel(glassDoor = false / true).
  'assortedstorage:cabinet': cabinet(false),
  'assortedstorage:glass_cabinet': cabinet(true),

  // AssortedStorage SafeModel.
  'assortedstorage:safe': {
    texSize: [64, 48],
    parts: [
      { name: 'main', boxes: [box([0, 0], [0, 3, 0], [16, 13, 16])], children: LEGS.map((b, i) => ({ name: `leg${i + 1}`, boxes: [b] })) },
      { name: 'door', offset: [3, 0, 15], boxes: [box([0, 32], [0, 6, 0], [10, 7, 2])] },
      { name: 'lock', visible: false, offset: [3, 0, 15.1], boxes: [box([48, 29], [6, 6, 1], [3, 6, 1])] },
      { name: 'handle', offset: [3, 0, 15], boxes: [box([48, 0], [7, 8, 2], [1, 3, 1])] }
    ]
  },

  // AssortedStorage LockerModel.
  'assortedstorage:locker': {
    texSize: [128, 128],
    parts: [
      { name: 'main', boxes: [box([0, 0], [0, 3, 0], [16, 13, 16])], children: LEGS.map((b, i) => ({ name: `leg${i + 1}`, boxes: [b] })) },
      { name: 'door', offset: [2, 0, 15], boxes: [box([32, 32], [0, 5, 0], [12, 9, 2])] },
      { name: 'lock', visible: false, offset: [2, 0, 15.1], boxes: [box([64, 0], [9, 6, 1], [3, 6, 1])] },
      { name: 'handle', offset: [2, 0, 15], boxes: [box([48, 0], [9, 9, 2], [1, 3, 1])] }
    ]
  },

  // AssortedStorage ItemTowerModel in its inventory pose: the glass body with both caps, the
  // corner posts and the centre pole, no shelves or side bars.
  'assortedstorage:item_tower': {
    texSize: [128, 128],
    parts: [
      { name: 'posts', boxes: [box([0, 80], [0, 0, 0], [3, 16, 3]), box([12, 80], [0, 0, 13], [3, 16, 3]), box([0, 99], [13, 0, 0], [3, 16, 3]), box([12, 99], [13, 0, 13], [3, 16, 3])] },
      { name: 'midbar1', boxes: [box([0, 45], [0, 7, 7], [16, 2, 2])] },
      { name: 'midbar5', boxes: [box([48, 32], [6, 1, 6], [4, 14, 4])] },
      { name: 'main', boxes: [box([0, 0], [0, 0, 0], [16, 16, 16])] },
      { name: 'cap1', boxes: [box([64, 0], [0, 0, 0], [16, 1, 16])] },
      { name: 'cap2', boxes: [box([64, 0], [0, 15, 0], [16, 1, 16])] }
    ]
  }
}

function cabinet(glassDoor) {
  const doorU = glassDoor ? 16 : 0
  return {
    texSize: [64, 48],
    parts: [
      { name: 'main', boxes: [box([0, 0], [0, 0, 0], [16, 16, 16])] },
      { name: 'door1', offset: [2, 0, 15], boxes: [box([doorU, 32], [0, 2, 0], [6, 12, 2])] },
      { name: 'door2', offset: [14, 0, 15], boxes: [box([doorU, 32], [-6, 2, 0], [6, 12, 2])] },
      { name: 'lock', visible: false, offset: [2, 0, 15.1], boxes: [box([48, 0], [4.5, 5, 1], [3, 6, 1])] },
      { name: 'handle1', offset: [2, 0, 15], boxes: [box([0, 0], [4, 7, 2], [1, 2, 1])] },
      { name: 'handle2', offset: [14, 0, 15], boxes: [box([0, 0], [-5, 7, 2], [1, 2, 1])] }
    ]
  }
}

// How the special renderers pick their textures. `layers` are drawn in order on every quad.
export function specialTextures(special) {
  const type = special.type
  const tex = special.texture
  switch (type) {
    case 'minecraft:chest':
      return { model: 'minecraft:chest', layers: [`minecraft:entity/chest/${stripNs(tex)}`] }
    case 'minecraft:shulker_box':
      return { model: 'minecraft:shulker_box', layers: [`minecraft:entity/shulker/${stripNs(tex)}`] }
    case 'assortedstorage:locked_chest':
      return { model: 'assortedstorage:chest', layers: [tex] }
    case 'assortedstorage:locked_shulker_box':
      return { model: 'assortedstorage:locked_shulker_box', layers: ['minecraft:entity/shulker/shulker', tex] }
    case 'assortedstorage:storage':
      return { model: `assortedstorage:${special.model}`, layers: [tex] }
    case 'assortedstorage:item_tower':
      return { model: 'assortedstorage:item_tower', layers: ['assortedstorage:textures/model/item_tower.png'] }
    default:
      return null
  }
}

function stripNs(id) {
  return id.includes(':') ? id.slice(id.indexOf(':') + 1) : id
}
