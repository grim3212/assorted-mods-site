import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
import SimpleLayout from './layouts/SimpleLayout.vue'
import ModLayout from './layouts/ModLayout.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import ModParent from './components/mods/ModParent.vue'
import PageDecorHome from './views/mods/decor/PageHome.vue'
import PageColorizer from './views/mods/decor/PageColorizer.vue'
import PageFurniture from './views/mods/decor/PageFurniture.vue'
import StorageHome from './views/mods/storage/StorageHome.vue'
import ToolsHome from './views/mods/tools/ToolsHome.vue'

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
        ],
      },
      {
        path: 'storage',
        name: 'StorageHome',
        component: StorageHome,
      },
      {
        path: 'tools',
        name: 'ToolsHome',
        component: ToolsHome,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
