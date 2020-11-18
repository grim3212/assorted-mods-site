import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import DecorHome from './views/mods/decor/DecorHome.vue'
import StorageHome from './views/mods/storage/StorageHome.vue'
import ToolsHome from './views/mods/tools/ToolsHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/decor',
    name: 'DecorHome',
    component: DecorHome,
  },
  {
    path: '/storage',
    name: 'StorageHome',
    component: StorageHome,
  },
  {
    path: '/tools',
    name: 'ToolsHome',
    component: ToolsHome,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
