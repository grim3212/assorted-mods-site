export type ModDetails = {
  name: string
  description: string
  /** Slug in the CurseForge project URL; matches `curseforge_slug` in the mod's gradle.properties. */
  curseforgeSlug: string
  /** Slug in the Modrinth project URL. Usually the same as the CurseForge one, but not always:
      Assorted Cuisine could not have `assorted-cuisine`, which another author already holds. */
  modrinthSlug: string
  githubLink: string
  homeRoute: string
}

export const Constants = {
  CurseUrl: 'https://www.curseforge.com/minecraft/mc-mods/',
  ModrinthUrl: 'https://modrinth.com/mod/'
}

const EMPTY: ModDetails = {
  name: '',
  description: '',
  curseforgeSlug: '',
  modrinthSlug: '',
  githubLink: '',
  homeRoute: '/'
}

const CORE: ModDetails = {
  name: 'Assorted Core',
  description: 'Adds an assortment of items and blocks to be used by the other Assorted Mods.',
  curseforgeSlug: 'assorted-core',
  modrinthSlug: 'assorted-core',
  githubLink: 'https://github.com/grim3212/AssortedCore',
  homeRoute: '/core'
}

const CUISINE: ModDetails = {
  name: 'Assorted Cuisine',
  description: 'Cheese, chocolate, pies, sodas and other assorted foods to cook, bottle and eat.',
  curseforgeSlug: 'assorted-cuisine',
  modrinthSlug: 'assortedcuisine',
  githubLink: 'https://github.com/grim3212/AssortedCuisine',
  homeRoute: '/cuisine'
}

const DECOR: ModDetails = {
  name: 'Assorted Decor',
  description: 'An assortment of various decorations to improve the look of your Minecraft world.',
  curseforgeSlug: 'assorted-decor',
  modrinthSlug: 'assorted-decor',
  githubLink: 'https://github.com/grim3212/AssortedDecor',
  homeRoute: '/decor'
}

const STORAGE: ModDetails = {
  name: 'Assorted Storage',
  description: 'Assorted blocks and items useful for storage.',
  curseforgeSlug: 'assorted-storage',
  modrinthSlug: 'assorted-storage',
  githubLink: 'https://github.com/grim3212/AssortedStorage',
  homeRoute: '/storage'
}

const TECH: ModDetails = {
  name: 'Assorted Tech',
  description:
    'Contains an assorted group of additions based around technology, machines, and logic.',
  curseforgeSlug: 'assorted-tech',
  modrinthSlug: 'assorted-tech',
  githubLink: 'https://github.com/grim3212/AssortedTech',
  homeRoute: '/tech'
}

const TOOLS: ModDetails = {
  name: 'Assorted Tools',
  description: 'An assortment of various helpful tools to add to your Minecraft world.',
  curseforgeSlug: 'assorted-tools',
  modrinthSlug: 'assorted-tools',
  githubLink: 'https://github.com/grim3212/AssortedTools',
  homeRoute: '/tools'
}

const WORLD: ModDetails = {
  name: 'Assorted World',
  description:
    'An assortment of various additions based around world generation that are added to the Minecraft world.',
  curseforgeSlug: 'assorted-world',
  modrinthSlug: 'assorted-world',
  githubLink: 'https://github.com/grim3212/AssortedWorld',
  homeRoute: '/world'
}

export const MODS = {
  core: CORE,
  cuisine: CUISINE,
  decor: DECOR,
  storage: STORAGE,
  tech: TECH,
  tools: TOOLS,
  world: WORLD,
}

export function getModDetails(mod: string) {
  switch (mod) {
    case 'core':
      return CORE
    case 'cuisine':
      return CUISINE
    case 'decor':
      return DECOR
    case 'storage':
      return STORAGE
    case 'tech':
      return TECH
    case 'tools':
      return TOOLS
    case 'world':
      return WORLD
    default:
      return EMPTY
  }
}
