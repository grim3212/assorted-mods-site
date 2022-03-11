import { ChangelogEntry } from './changelog'

export const CoreChangelog: ChangelogEntry[] = [
  {
    name: '1.18.2-4.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3670617',
    date: '03/02/2022',
    changes: [
      'Initial update to 1.18.2.'
    ],
  },
  {
    name: '1.18.1-3.1.1',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3636435',
    date: '02/04/2022',
    changes: [
      'Update tags to match what Forge uses for raw materials.'
    ],
  },
  {
    name: '1.18.1-3.1.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3567086',
    date: '12/14/2021',
    changes: [
      'Update to 1.18.1'
    ],
  },
  {
    name: '1.18-3.0.3',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3555557',
    date: '12/08/2021',
    changes: [
      'Add back in JEI support',
      'Add in blasting recipes for dusts'
    ],
  },
  {
    name: '1.18-3.0.1',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3546768',
    date: '12/03/2021',
    changes: [
      'Fix machines not saving inventories.',
      'Adjust default ore spawn ranges to use 1.18 world height changes'
    ],
  },
  {
    name: '1.18-3.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3545369',
    date: '12/02/2021',
    changes: [
      'Initial update to 1.18',
    ],
  },
  {
    name: '1.17.1-2.0.2',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3469312',
    date: '09/23/2021',
    changes: [
      'Add back in compatibility to support JEI.', 
      'Lower gem default spawn rates a bit.'
    ],
  },
  {
    name: '1.17.1-2.0.1',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3431024',
    date: '08/18/2021',
    changes: [
      'Fix crash on new version due to Forge changes around the redesigned tool system'
    ],
  },
  {
    name: '1.17.1-2.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3405239',
    date: '07/29/2021',
    changes: [
      'Initial release for 1.17.1',
      'Includes new deepslate variants, raw ores, removal of copper and amethyst ores since vanilla now supports them.',
      'Peridot replaces Amethyst as a Gem addition since vanilla now adds amethyst.',
    ],
  },
  {
    name: '1.16.4-1.0.3',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3154388',
    date: '12/31/2020',
    changes: [
      'More explicit allowed items in the machines for automation pulled from the recipes.',
      'Gold Gear and Dust add to piglin loved',
    ],
  },
  {
    name: '1.16.4-1.0.1',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3152432',
    date: '12/29/2020',
    changes: [
      'Make the machines more friendly with automation. They will only insert into the slots if they are valid.',
    ],
  },
  {
    name: '1.16.4-1.0.0',
    url: 'https://www.curseforge.com/minecraft/mc-mods/assorted-core/files/3134360',
    date: '12/08/2020',
    changes: ['Initial release'],
  },
]
