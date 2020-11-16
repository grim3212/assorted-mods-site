<template>
  <div class="px-8 prose">
    <p class="text-2xl font-bold text-pink-900">{{ msg }}</p>
    <button class="px-3 py-2 border border-gray-300 rounded-md shadow text-pink-900" @click="isDark = !isDark">
      dark mode is: {{ isDark }}
    </button>
    <button class="px-3 py-2 border border-gray-300 rounded-md shadow" @click="count++">
      count is: {{ count }}
    </button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import { globalState } from '../store'

export default defineComponent({
  props: {
    msg: String,
  },

  setup() {
    return {
      count: toRef(globalState, 'count'),
      isDark: toRef(globalState, 'isDark'),
    }
  },

  mounted () {
    document.documentElement.classList.toggle('dark', this.isDark)
  },

  watch: {
    isDark (newVal : boolean) {
      document.documentElement.classList.toggle('dark', newVal)
    }
  }
})
</script>
