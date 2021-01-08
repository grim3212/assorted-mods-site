<template>
  <div v-for="entry in changelog" :key="entry.name">
    <div class="flex flex-row justify-between">
      <h2>
        <a
          :name="entry.name"
          :href="entry.url"
          class="font-bold underline text-indigo-500 hover:text-indigo-800 visited:text-purple-600"
          >{{ entry.name }}</a
        >
      </h2>
      <span class="justify-self-center self-center text-indigo-200 font-bold">
        {{ getFormattedDate(new Date(entry.date)) }}
      </span>
    </div>

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

  methods: {
    getFormattedDate(date: Date) {
      let year = date.getFullYear()
      let month = (1 + date.getMonth()).toString().padStart(2, '0')
      let day = date.getDate().toString().padStart(2, '0')

      return month + '/' + day + '/' + year
    },
  },
})
</script>
