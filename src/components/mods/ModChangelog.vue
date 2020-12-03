<template>
  <div v-for="entry in changelog" :key="entry.name">
    <h2>
      <a
        :name="entry.name"
        :href="entry.url"
        class="font-bold underline text-indigo-500 hover:text-indigo-800 visited:text-purple-600"
        >{{ entry.name }}</a
      >
    </h2>
    <ul class="list-disc list-inside">
      <li v-for="(change, index) in entry.changes" :key="index">{{ change }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    changelog: {
      type: Array,
      required: true,
    },
  },
})
</script>
