<template>
  <div class="xl:w-1/3 md:w-1/2 p-4">
    <div
      class="border border-gray-300 p-6 rounded-lg hover:text-teal-500 hover:bg-gray-100 cursor-pointer"
    >
      <router-link :to="details.homeRoute">
        <h2 class="text-lg font-medium title-font mb-2">{{ details.name }}</h2>
        <p class="leading-relaxed text-base">{{ details.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ModDetails, getModDetails } from '../../util/mods'

export default defineComponent({
  props: {
    mod: {
      type: String,
      required: true,
    },
  },

  computed: {
    details(): ModDetails {
      return getModDetails(this.mod)
    },
  },
})
</script>
