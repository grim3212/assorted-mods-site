<template>
  <div>
    <mod-home mod="decor"></mod-home>
    <div class="flex justify-center">
      <img
        class="border-black border-2 py-0"
        src="\mods\decor\decor.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ModHome from '../../../components/mods/ModHome.vue'

export default defineComponent({
  components: {
    ModHome,
  },
})
</script>
