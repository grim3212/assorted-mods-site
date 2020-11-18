<template>
  <div class="flex flex-col h-full w-full justify-between">
    <Header />
    <main class="mb-auto bg-gray-900">
      <router-view />
    </main>
    <Footer class="h-10 bg-blue-500" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from './store'

import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default defineComponent({
  components: {
    Header,
    Footer,
  },

  setup() {
    return {
      isDark: toRef(globalState, 'isDark'),
    }
  },

  mounted() {
    document.documentElement.classList.toggle('dark', this.isDark)
  },

  watch: {
    isDark(newVal: boolean) {
      document.documentElement.classList.toggle('dark', newVal)
    },
  },
})
</script>
