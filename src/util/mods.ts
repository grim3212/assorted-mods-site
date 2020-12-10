export type ModDetails = {
  name: String
  description: String
  downloadLink: String
  githubLink: String
  homeRoute: String
  changelogName: String
}

const EMPTY: ModDetails = {
  name: '',
  description: '',
  downloadLink: '',
  githubLink: '',
  homeRoute: '/',
  changelogName: '',
}

const CORE: ModDetails = {
  name: 'Assorted Core',
  description: 'Adds an assortment of items and blocks to be used by the other Assorted Mods.',
  downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core',
  githubLink: 'https://github.com/grim3212/AssortedCore',
  homeRoute: '/core',
  changelogName: 'CoreChangelog',
}

const DECOR: ModDetails = {
  name: 'Assorted Decor',
  description: 'An assortment of various decorations to improve the look of your Minecraft world.',
  downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor',
  githubLink: 'https://github.com/grim3212/AssortedDecor',
  homeRoute: '/decor',
  changelogName: 'DecorChangelog',
}

const STORAGE: ModDetails = {
  name: 'Assorted Storage',
  description: 'Assorted blocks and items useful for storage.',
  downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/assorted-storage',
  githubLink: 'https://github.com/grim3212/AssortedStorage',
  homeRoute: '/storage',
  changelogName: 'StorageChangelog',
}

const TOOLS: ModDetails = {
  name: 'Assorted Tools',
  description: 'An assortment of various helpful tools to add to your Minecraft world.',
  downloadLink: 'https://www.curseforge.com/minecraft/mc-mods/assorted-tools',
  githubLink: 'https://github.com/grim3212/AssortedTools',
  homeRoute: '/tools',
  changelogName: 'ToolsChangelog',
}

export const MODS = {
  core: CORE,
  decor: DECOR,
  storage: STORAGE,
  tools: TOOLS,
}

export function getModDetails(mod: String) {
  switch (mod) {
    case 'core':
      return CORE
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
