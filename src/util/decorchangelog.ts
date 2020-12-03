import { ChangelogEntry } from './changelog'

export const DecorChangelog: ChangelogEntry[] = [
  {
    name: '1.16.4-2.0.5',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor/files/3128524',
    date: '12/02/2020 7:21 AM',
    changes: ['Add in Neon Signs'],
  },
  {
    name: '1.16.4-2.0.4',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor/files/3117133',
    date: '11/19/2020 2:52 PM',
    changes: ['Fix brush recipe being upside down'],
  },
  {
    name: '1.16.4-2.0.3',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor/files/3114140',
    date: '11/17/2020 6:59 AM',
    changes: ['Fix crash with Apotheosis'],
  },
  {
    name: '1.16.4-2.0.2',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor/files/3110485',
    date: '11/13/2020 6:37 AM',
    changes: [
      'Fix block duping when consumeBlock is true',
      'Actually hook up consumeBlock into the brush, true will remove a block, false will just set the brush to it and leave the block alone',
    ],
  },
  {
    name: '1.16.4-2.0.1',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor/files/3109613',
    date: '11/12/2020 7:35 AM',
    changes: ['Fix colorizers not showing breaking progress'],
  },
  {
    name: '1.16.4-2.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor/files/3108290',
    date: '11/10/2020 7:34 PM',
    changes: ['Update to 1.16.4'],
  },
  {
    name: '1.16.3-1.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-decor/files/3095274',
    date: '10/28/2020 7:34 AM',
    changes: ['Initial release including colorizers, wallpaper, and frames'],
  },
]
