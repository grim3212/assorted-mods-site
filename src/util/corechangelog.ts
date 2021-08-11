import { ChangelogEntry } from './changelog'

export const CoreChangelog: ChangelogEntry[] = [
  {
    name: '1.17.1-2.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3405239',
    date: '7/29/2021 6:25 AM',
    changes: [
      'Initial release for 1.17.1',
      'Includes new deepslate variants, raw ores, removal of copper and amethyst ores since vanilla now supports them.',
      'Peridot replaces Amethyst as a Gem addition since vanilla now adds amethyst.',
    ],
  },
  {
    name: '1.16.4-1.0.3',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3154388',
    date: '12/31/2020 8:38 AM',
    changes: [
      'More explicit allowed items in the machines for automation pulled from the recipes.',
      'Gold Gear and Dust add to piglin loved',
    ],
  },
  {
    name: '1.16.4-1.0.1',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3152432',
    date: '12/29/2020 8:52 AM',
    changes: [
      'Make the machines more friendly with automation. They will only insert into the slots if they are valid.',
    ],
  },
  {
    name: '1.16.4-1.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3134360',
    date: '12/08/2020 3:43 PM',
    changes: ['Initial release'],
  },
]
