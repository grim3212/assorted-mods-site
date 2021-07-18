<template>
  <div id="content">
    <h1><a name="changelog">World Changelog</a></h1>
    <mod-changelog :changelog="getChangelog"></mod-changelog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModChangelog from '../../../components/mods/ModChangelog.vue'
import { ChangelogEntry } from '../../../util/changelog'
import { WorldChangelog } from '../../../util/worldchangelog'

export default defineComponent({
  components: {
    ModChangelog,
  },

  computed: {
    getChangelog(): ChangelogEntry[] {
      return WorldChangelog
    },
  },
})
</script>
