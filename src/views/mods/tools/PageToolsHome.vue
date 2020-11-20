<template>
  <div>
    <mod-home mod="tools"></mod-home>
    <div class="flex justify-center">
      <img
        class="border-black border-2 py-0"
        src="src\assets\mods\tools\tools.png"
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
