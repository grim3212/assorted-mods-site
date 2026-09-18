// Shape of the JSON in app/data/recipes, written by scripts/build-recipes.mjs.

export interface RecipeIcon {
  src: string
  /** A flat texture at its native size; scale it with image-rendering: pixelated. 3D renders are not. */
  pixelated: boolean
}

export interface RecipeItem {
  id: string
  name: string
  icon: RecipeIcon | null
}

export interface RecipeSlot {
  /** item: one item. tag: any member of the tag. fluid: any container holding the fluid. items: one of a list. */
  kind: 'item' | 'tag' | 'fluid' | 'items' | 'unknown'
  tag?: string
  fluid?: string
  /** Short human wording for tags and fluids, e.g. "iron ingots". */
  label?: string
  note?: string
  count: number
  items: RecipeItem[]
}

export type RecipeType = 'shaped' | 'shapeless' | 'cooking' | 'stonecutting' | 'smithing' | 'grinding_mill' | 'alloy_forge' | 'cuisine_machine'

export interface RecipeData {
  id: string
  type: RecipeType
  typeLabel: string
  station: string
  /** Key into app/data/recipes/gui.json: which GUI background and slot layout to draw. */
  gui: string
  result: RecipeSlot | null
  note?: string
  // shaped
  grid?: { width: number, height: number, slots: (RecipeSlot | null)[] }
  // shapeless
  ingredients?: RecipeSlot[]
  // cooking, stonecutting, grinding_mill
  input?: RecipeSlot | null
  /** cooking, grinding_mill, alloy_forge: what the fuel slot accepts. */
  fuel?: RecipeSlot | null
  experience?: number
  /** Seconds. */
  time?: number
  // smithing
  template?: RecipeSlot | null
  base?: RecipeSlot | null
  addition?: RecipeSlot | null
  // grinding_mill
  tool?: RecipeSlot | null
  // alloy_forge
  inputs?: (RecipeSlot | null)[]
  /** cuisine_machine: the block that does the work, shown in its own slot and never consumed. */
  machine?: RecipeSlot | null
}

/** A cropped GUI texture and where its slots sit, in GUI pixels relative to the crop. */
export interface GuiLayout {
  image: string
  width: number
  height: number
  /** Item-area top-left corners (the 16x16 inside the 18x18 slot frame), by role: one [x, y] or a list of them. */
  slots: Record<string, number[] | number[][]>
}
