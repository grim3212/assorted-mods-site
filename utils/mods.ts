export type ModDetails = {
  name: string
  description: string
  modId: string
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
  modId: '',
  githubLink: '',
  homeRoute: '/'
}

const CORE: ModDetails = {
  name: 'Assorted Core',
  description: 'Adds an assortment of items and blocks to be used by the other Assorted Mods.',
  modId: 'assorted-core',
  githubLink: 'https://github.com/grim3212/AssortedCore',
  homeRoute: '/core'
}

const DECOR: ModDetails = {
  name: 'Assorted Decor',
  description: 'An assortment of various decorations to improve the look of your Minecraft world.',
  modId: 'assorted-decor',
  githubLink: 'https://github.com/grim3212/AssortedDecor',
  homeRoute: '/decor'
}

const STORAGE: ModDetails = {
  name: 'Assorted Storage',
  description: 'Assorted blocks and items useful for storage.',
  modId: 'assorted-storage',
  githubLink: 'https://github.com/grim3212/AssortedStorage',
  homeRoute: '/storage'
}

const TECH: ModDetails = {
  name: 'Assorted Tech',
  description:
    'Contains an assorted group of additions based around technology, machines, and logic.',
  modId: 'assorted-tech',
  githubLink: 'https://github.com/grim3212/AssortedTech',
  homeRoute: '/tech'
}

const TOOLS: ModDetails = {
  name: 'Assorted Tools',
  description: 'An assortment of various helpful tools to add to your Minecraft world.',
  modId: 'assorted-tools',
  githubLink: 'https://github.com/grim3212/AssortedTools',
  homeRoute: '/tools'
}

const WORLD: ModDetails = {
  name: 'Assorted World',
  description:
    'An assortment of various additions based around world generation that are added to the Minecraft world.',
  modId: 'assorted-world',
  githubLink: 'https://github.com/grim3212/AssortedWorld',
  homeRoute: '/world'
}

export const MODS = {
  core: CORE,
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
