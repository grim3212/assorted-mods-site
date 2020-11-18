export type ModDetails = {
  name: String
  description: String
  downloadLink: String
  githubLink: String
  homeRoute: String
}

const EMPTY: ModDetails = {
  name: '',
  description: '',
  downloadLink: '',
  githubLink: '',
  homeRoute: '/',
}

const DECOR: ModDetails = {
  name: 'Assorted Decor',
  description: 'An assortment of various decorations to improve the look of your Minecraft world.',
  downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor',
  githubLink: 'https://github.com/grim3212/AssortedDecor',
  homeRoute: '/decor',
}

const STORAGE: ModDetails = {
  name: 'Assorted Storage',
  description: 'Assorted blocks and items useful for storage.',
  downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/assorted-storage',
  githubLink: 'https://github.com/grim3212/AssortedStorage',
  homeRoute: '/storage',
}

const TOOLS: ModDetails = {
  name: 'Assorted Tools',
  description: 'An assortment of various helpful tools to add to your Minecraft world.',
  downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/assorted-tools',
  githubLink: 'https://github.com/grim3212/AssortedTools',
  homeRoute: '/tools',
}

export const MODS = {
  decor: DECOR,
  storage: STORAGE,
  tools: TOOLS,
}

export function getModDetails(mod: String) {
  switch (mod) {
    case 'decor':
      return DECOR
    case 'storage':
      return STORAGE
    case 'tools':
      return TOOLS
    default:
      return EMPTY
  }
}
