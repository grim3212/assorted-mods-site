import { createApp } from 'vue'
import App from './App.vue'
import './index.postcss'
import router from './router'

createApp(App).use(router).mount('#app')
