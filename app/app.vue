<template>
  <NuxtLayout :name="currentLayout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const route = useRoute()

const currentLayout = computed(() => {
  if (route.name === 'index') {
    return 'default'
  }
  return 'mod'
})

useHeadSafe({
  title: () => {
    return route.meta.pageTitle ? 'Assorted Mods - ' + route.meta.pageTitle : 'Assorted Mods'
  }
})

useServerSeoMeta({
  title: 'Assorted Mods',
  ogTitle: 'Assorted Mods',
  description: 'Contains all of the information about the "Assorted" mod series by Grim3212 for Minecraft.',
  ogDescription: 'Contains all of the information about the "Assorted" mod series by Grim3212 for Minecraft.',
  ogLocale: 'en',
  ogUrl: 'https://assortedmods.com/',
  ogSiteName: 'Assorted Mods',
})
</script>
