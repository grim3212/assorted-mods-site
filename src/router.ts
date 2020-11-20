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
      },
      {
        path: ':catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
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
          },
          {
            path: 'colorizer',
            name: 'Colorizer',
            component: PageColorizer,
          },
          {
            path: 'furniture',
            name: 'Furniture',
            component: PageFurniture,
          },
          {
            path: 'slopes',
            name: 'Slopes',
            component: PageSlopes,
          },
          {
            path: 'fireplaces',
            name: 'Fireplaces',
            component: PageFireplaces,
          },
          {
            path: 'planter',
            name: 'Planter',
            component: PagePlanterPot,
          },
          {
            path: 'wallpaper',
            name: 'Wallpaper',
            component: PageWallpaper,
          },
          {
            path: 'frames',
            name: 'Frames',
            component: PageFrames,
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
          },
          {
            path: 'locksmith',
            name: 'Locksmith',
            component: PageLocksmith,
          },
          {
            path: 'lockeable',
            name: 'LockeableStorage',
            component: PageLockeableStorage,
          },
          {
            path: 'itemtower',
            name: 'ItemTower',
            component: PageItemTower,
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
          },
          {
            path: 'hammers',
            name: 'Hammers',
            component: PageHammers,
          },
          {
            path: 'multitools',
            name: 'MultiTools',
            component: PageMultiTools,
          },
          {
            path: 'boomerang',
            name: 'Boomerang',
            component: PageBoomerang,
          },
          {
            path: 'pokeball',
            name: 'Pokeball',
            component: PagePokeball,
          },
          {
            path: 'chickensuit',
            name: 'ChickenSuit',
            component: PageChickenSuit,
          },
          {
            path: 'wands',
            name: 'Wands',
            component: PageWands,
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

export default router
