<template>
  <div class="xl:w-1/3 md:w-1/2 p-4 w-full">
    <NuxtLink :to="details.homeRoute">
      <div class="group border border-gray-300 p-6 rounded-lg hover:bg-gray-100 cursor-pointer h-44">
        <h2 class="text-lg font-medium title-font mb-2 group-hover:text-gray-900">
          {{ details.name }}
        </h2>
        <p class="leading-relaxed text-base group-hover:text-gray-700">
          {{ details.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  mod: string
}>()

const details = computed(() => getModDetails(props.mod))
</script>
