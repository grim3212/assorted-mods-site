import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
const SimpleLayout = () => import('./layouts/SimpleLayout.vue')
const ModLayout = () => import('./layouts/ModLayout.vue')
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const NotFound = () => import('./views/NotFound.vue')
const ModParent = () => import('./components/mods/ModParent.vue')

// CORE
const PageCoreHome = () => import('./views/mods/core/PageCoreHome.vue')
const PageMachines = () => import('./views/mods/core/PageMachines.vue')
const PageMaterials = () => import('./views/mods/core/PageMaterials.vue')

// DECOR
const PageDecorHome = () => import('./views/mods/decor/PageDecorHome.vue')
const PageColorizer = () => import('./views/mods/decor/PageColorizer.vue')
const PageFurniture = () => import('./views/mods/decor/PageFurniture.vue')
const PageFireplaces = () => import('./views/mods/decor/PageFireplaces.vue')
const PageSlopes = () => import('./views/mods/decor/PageSlopes.vue')
const PagePlanterPot = () => import('./views/mods/decor/PagePlanterPot.vue')
const PageFrames = () => import('./views/mods/decor/PageFrames.vue')
const PageNeonSign = () => import('./views/mods/decor/PageNeonSign.vue')
const PageHangeable = () => import('./views/mods/decor/PageHangeable.vue')
const PageFluro = () => import('./views/mods/decor/PageFluro.vue')
const PageWallpaper = () => import('./views/mods/decor/PageWallpaper.vue')
const PageExtraDecor = () => import('./views/mods/decor/PageExtraDecor.vue')
const PagePainting = () => import('./views/mods/decor/PagePainting.vue')
const PageRoadways = () => import('./views/mods/decor/PageRoadways.vue')
const PageDecorations = () => import('./views/mods/decor/PageDecorations.vue')
const PageCage = () => import('./views/mods/decor/PageCage.vue')

// STORAGE
const PageStorageHome = () => import('./views/mods/storage/PageStorageHome.vue')
const PageLockeableStorage = () => import('./views/mods/storage/PageLockeableStorage.vue')
const PageLockedEnderChest = () => import('./views/mods/storage/PageLockedEnderChest.vue')
const PageItemTower = () => import('./views/mods/storage/PageItemTower.vue')
const PageLocksmith = () => import('./views/mods/storage/PageLocksmith.vue')
const PageBetterStorage = () => import('./views/mods/storage/PageBetterStorage.vue')
const PageStorageCrates = () => import('./views/mods/storage/PageStorageCrates.vue')
const PageBags = () => import('./views/mods/storage/PageBags.vue')

// TECH
const PageTechHome = () => import('./views/mods/tech/PageTechHome.vue')
const PageFans = () => import('./views/mods/tech/PageFans.vue')
const PageSensors = () => import('./views/mods/tech/PageSensors.vue')
const PageSpikes = () => import('./views/mods/tech/PageSpikes.vue')
const PageTorches = () => import('./views/mods/tech/PageTorches.vue')
const PageBridges = () => import('./views/mods/tech/PageBridges.vue')
const PageGravity = () => import('./views/mods/tech/PageGravity.vue')
const PageAlarm = () => import('./views/mods/tech/PageAlarm.vue')

// TOOLS
const PageToolsHome = () => import('./views/mods/tools/PageToolsHome.vue')
const PageHammers = () => import('./views/mods/tools/PageHammers.vue')
const PageShears = () => import('./views/mods/tools/PageShears.vue')
const PageBuckets = () => import('./views/mods/tools/PageBuckets.vue')
const PageCoreSupport = () => import('./views/mods/tools/PageCoreSupport.vue')
const PageMultiTools = () => import('./views/mods/tools/PageMultiTools.vue')
const PageBoomerang = () => import('./views/mods/tools/PageBoomerang.vue')
const PagePokeball = () => import('./views/mods/tools/PagePokeball.vue')
const PageChickenSuit = () => import('./views/mods/tools/PageChickenSuit.vue')
const PageWands = () => import('./views/mods/tools/PageWands.vue')
const PageSpears = () => import('./views/mods/tools/PageSpears.vue')
const PageUltimateFist = () => import('./views/mods/tools/PageUltimateFist.vue')
const PageMaterialConfig = () => import('./views/mods/tools/PageMaterialConfig.vue')

// WORLD
const PageWorldHome = () => import('./views/mods/world/PageWorldHome.vue')
const PageRandomite = () => import('./views/mods/world/PageRandomite.vue')
const PageRuins = () => import('./views/mods/world/PageRuins.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: SimpleLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: {
          title: 'About',
        },
      },
      {
        path: ':catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: {
          title: '404',
        },
      },
    ],
  },
  {
    path: '/',
    component: ModLayout,
    children: [
      {
        path: 'core',
        component: ModParent,
        children: [
          {
            path: '',
            name: 'CoreHome',
            component: PageCoreHome,
            meta: {
              title: 'Core',
            },
          },
          {
            path: 'machines',
            name: 'Machines',
            component: PageMachines,
            meta: {
              title: 'Core | Machines',
            },
          },
          {
            path: 'materials',
            name: 'Materials',
            component: PageMaterials,
            meta: {
              title: 'Core | Materials',
            },
          },
        ],
      },
      {
        path: 'decor',
        component: ModParent,
        children: [
          {
            path: '',
            name: 'DecorHome',
            component: PageDecorHome,
            meta: {
              title: 'Decor',
            },
          },
          {
            path: 'colorizer',
            name: 'Colorizer',
            component: PageColorizer,
            meta: {
              title: 'Decor | Colorizer',
            },
          },
          {
            path: 'furniture',
            name: 'Furniture',
            component: PageFurniture,
            meta: {
              title: 'Decor | Furniture',
            },
          },
          {
            path: 'slopes',
            name: 'Slopes',
            component: PageSlopes,
            meta: {
              title: 'Decor | Slopes',
            },
          },
          {
            path: 'fireplaces',
            name: 'Fireplaces',
            component: PageFireplaces,
            meta: {
              title: 'Decor | Fireplaces',
            },
          },
          {
            path: 'planter',
            name: 'Planter',
            component: PagePlanterPot,
            meta: {
              title: 'Decor | Planter Pot',
            },
          },
          {
            path: 'wallpaper',
            name: 'Wallpaper',
            component: PageWallpaper,
            meta: {
              title: 'Decor | Wallpaper',
            },
          },
          {
            path: 'frames',
            name: 'Frames',
            component: PageFrames,
            meta: {
              title: 'Decor | Frames',
            },
          },
          {
            path: 'neon-sign',
            name: 'NeonSign',
            component: PageNeonSign,
            meta: {
              title: 'Decor | Neon Sign',
            },
          },
          {
            path: 'hangeables',
            name: 'Hangeables',
            component: PageHangeable,
            meta: {
              title: 'Decor | Hangeables',
            },
          },
          {
            path: 'fluro',
            name: 'Fluro',
            component: PageFluro,
            meta: {
              title: 'Decor | Fluro',
            },
          },
          {
            path: 'extras',
            name: 'ExtraDecor',
            component: PageExtraDecor,
            meta: {
              title: 'Decor | Extras',
            },
          },
          {
            path: 'painting',
            name: 'Painting',
            component: PagePainting,
            meta: {
              title: 'Decor | Painting',
            },
          },
          {
            path: 'roadways',
            name: 'Roadways',
            component: PageRoadways,
            meta: {
              title: 'Decor | Roadways',
            },
          },
          {
            path: 'decorations',
            name: 'Decorations',
            component: PageDecorations,
            meta: {
              title: 'Decor | Decorations',
            },
          },
          {
            path: 'cage',
            name: 'Cage',
            component: PageCage,
            meta: {
              title: 'Decor | Cage',
            },
          },
        ],
      },
      {
        path: 'storage',
        component: ModParent,
        children: [
          {
            path: '',
            name: 'StorageHome',
            component: PageStorageHome,
            meta: {
              title: 'Storage',
            },
          },
          {
            path: 'locksmith',
            name: 'Locksmith',
            component: PageLocksmith,
            meta: {
              title: 'Storage | Locksmith',
            },
          },
          {
            path: 'lockeable',
            name: 'LockeableStorage',
            component: PageLockeableStorage,
            meta: {
              title: 'Storage | Lockeable Storage',
            },
          },
          {
            path: 'enderchest',
            name: 'LockedEnderChest',
            component: PageLockedEnderChest,
            meta: {
              title: 'Storage | Locked Ender Chest',
            },
          },
          {
            path: 'bags',
            name: 'Bags',
            component: PageBags,
            meta: {
              title: 'Storage | Bags',
            },
          },
          {
            path: 'betterstorage',
            name: 'BetterStorage',
            component: PageBetterStorage,
            meta: {
              title: 'Storage | Better Storage',
            },
          },
          {
            path: 'storage-crates',
            name: 'StorageCrates',
            component: PageStorageCrates,
            meta: {
              title: 'Storage | Storage Crates',
            },
          },
          {
            path: 'item-tower',
            name: 'ItemTower',
            component: PageItemTower,
            meta: {
              title: 'Storage | Item Tower',
            },
          },
        ],
      },
      {
        path: 'tech',
        component: ModParent,
        children: [
          {
            path: '',
            name: 'TechHome',
            component: PageTechHome,
            meta: {
              title: 'Tech',
            },
          },
          {
            path: 'fans',
            name: 'Fans',
            component: PageFans,
            meta: {
              title: 'Tech | Fans',
            },
          },
          {
            path: 'sensors',
            name: 'Sensors',
            component: PageSensors,
            meta: {
              title: 'Tech | Sensors',
            },
          },
          {
            path: 'spikes',
            name: 'Spikes',
            component: PageSpikes,
            meta: {
              title: 'Tech | Spikes',
            },
          },
          {
            path: 'bridges',
            name: 'Bridges',
            component: PageBridges,
            meta: {
              title: 'Tech | Bridges',
            },
          },
          {
            path: 'gravity',
            name: 'Gravity',
            component: PageGravity,
            meta: {
              title: 'Tech | Gravity',
            },
          },
          {
            path: 'alarm',
            name: 'Alarm',
            component: PageAlarm,
            meta: {
              title: 'Tech | Alarm',
            },
          },
          {
            path: 'torches',
            name: 'Torches',
            component: PageTorches,
            meta: {
              title: 'Tech | Torches',
            },
          },
        ],
      },
      {
        path: 'tools',
        component: ModParent,
        children: [
          {
            path: '',
            name: 'ToolsHome',
            component: PageToolsHome,
            meta: {
              title: 'Tools',
            },
          },
          {
            path: 'hammers',
            name: 'Hammers',
            component: PageHammers,
            meta: {
              title: 'Tools | Hammers',
            },
          },
          {
            path: 'shears',
            name: 'Shears',
            component: PageShears,
            meta: {
              title: 'Tools | Shears',
            },
          },
          {
            path: 'buckets',
            name: 'Buckets',
            component: PageBuckets,
            meta: {
              title: 'Tools | Buckets',
            },
          },
          {
            path: 'multitools',
            name: 'MultiTools',
            component: PageMultiTools,
            meta: {
              title: 'Tools | MultiTools',
            },
          },
          {
            path: 'ultimatefist',
            name: 'UltimateFist',
            component: PageUltimateFist,
            meta: {
              title: 'Tools | Ultimate Fist',
            },
          },
          {
            path: 'boomerang',
            name: 'Boomerang',
            component: PageBoomerang,
            meta: {
              title: 'Tools | Boomerangs',
            },
          },
          {
            path: 'pokeball',
            name: 'Pokeball',
            component: PagePokeball,
            meta: {
              title: 'Tools | Pokeball',
            },
          },
          {
            path: 'chicken-suit',
            name: 'ChickenSuit',
            component: PageChickenSuit,
            meta: {
              title: 'Tools | Chicken Suit',
            },
          },
          {
            path: 'wands',
            name: 'Wands',
            component: PageWands,
            meta: {
              title: 'Tools | Wands',
            },
          },
          {
            path: 'spears',
            name: 'Spears',
            component: PageSpears,
            meta: {
              title: 'Tools | Spears',
            },
          },
          {
            path: 'core-support',
            name: 'CoreSupport',
            component: PageCoreSupport,
            meta: {
              title: 'Tools | Core Support',
            },
          },
          {
            path: 'material-config',
            name: 'MaterialConfig',
            component: PageMaterialConfig,
            meta: {
              title: 'Tools | Material Config',
            },
          },
        ],
      },
      {
        path: 'world',
        component: ModParent,
        children: [
          {
            path: '',
            name: 'WorldHome',
            component: PageWorldHome,
            meta: {
              title: 'World',
            },
          },
          {
            path: 'randomite',
            name: 'Randomite',
            component: PageRandomite,
            meta: {
              title: 'World | Randomite',
            },
          },
          {
            path: 'ruins',
            name: 'Ruins',
            component: PageRuins,
            meta: {
              title: 'World | Ruins',
            },
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = 'Assorted Mods - ' + to.meta.title
  } else {
    document.title = 'Assorted Mods'
  }
})

export default router
