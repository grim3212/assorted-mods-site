<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from './store'

export default defineComponent({
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
