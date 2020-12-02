import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
const SimpleLayout = () => import('./layouts/SimpleLayout.vue')
const ModLayout = () => import('./layouts/ModLayout.vue')
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const NotFound = () => import('./views/NotFound.vue')
const ModParent = () => import('./components/mods/ModParent.vue')
const PageDecorHome = () => import('./views/mods/decor/PageDecorHome.vue')
const PageColorizer = () => import('./views/mods/decor/PageColorizer.vue')
const PageFurniture = () => import('./views/mods/decor/PageFurniture.vue')
const PageFireplaces = () => import('./views/mods/decor/PageFireplaces.vue')
const PageSlopes = () => import('./views/mods/decor/PageSlopes.vue')
const PagePlanterPot = () => import('./views/mods/decor/PagePlanterPot.vue')
const PageFrames = () => import('./views/mods/decor/PageFrames.vue')
const PageNeonSign = () => import('./views/mods/decor/PageNeonSign.vue')
const PageWallpaper = () => import('./views/mods/decor/PageWallpaper.vue')
const PageStorageHome = () => import('./views/mods/storage/PageStorageHome.vue')
const PageLockeableStorage = () => import('./views/mods/storage/PageLockeableStorage.vue')
const PageItemTower = () => import('./views/mods/storage/PageItemTower.vue')
const PageLocksmith = () => import('./views/mods/storage/PageLocksmith.vue')
const PageToolsHome = () => import('./views/mods/tools/PageToolsHome.vue')
const PageHammers = () => import('./views/mods/tools/PageHammers.vue')
const PageMultiTools = () => import('./views/mods/tools/PageMultiTools.vue')
const PageBoomerang = () => import('./views/mods/tools/PageBoomerang.vue')
const PagePokeball = () => import('./views/mods/tools/PagePokeball.vue')
const PageChickenSuit = () => import('./views/mods/tools/PageChickenSuit.vue')
const PageWands = () => import('./views/mods/tools/PageWands.vue')
const PageMaterialConfig = () => import('./views/mods/tools/PageMaterialConfig.vue')

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
            path: 'multitools',
            name: 'MultiTools',
            component: PageMultiTools,
            meta: {
              title: 'Tools | MultiTools',
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
            path: 'material-config',
            name: 'MaterialConfig',
            component: PageMaterialConfig,
            meta: {
              title: 'Tools | Material Config',
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
