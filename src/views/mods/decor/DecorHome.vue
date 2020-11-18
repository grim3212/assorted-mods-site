<template>
  <div>
    <mod-home mod="decor"></mod-home>
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
