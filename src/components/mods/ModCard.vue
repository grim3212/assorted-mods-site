<template>
  <div class="xl:w-1/3 md:w-1/2 p-4">
    <router-link :to="details.homeRoute">
      <div class="group border border-gray-300 p-6 rounded-lg hover:bg-gray-100 cursor-pointer">
        <h2 class="text-lg font-medium title-font mb-2 group-hover:text-gray-900">
          {{ details.name }}
        </h2>
        <p class="leading-relaxed text-base group-hover:text-gray-700">{{ details.description }}</p>
      </div>
    </router-link>
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
