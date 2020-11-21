<template>
  <div class="flex flex-col h-full w-full justify-between">
    <main class="mb-auto bg-gray-900">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Footer from '../components/Footer.vue'

export default defineComponent({
  components: {
    Footer,
  },
})
</script>
