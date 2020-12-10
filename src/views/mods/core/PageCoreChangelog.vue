<template>
  <div id="content">
    <h1><a name="changelog">Core Changelog</a></h1>
    <mod-changelog :changelog="getChangelog"></mod-changelog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModChangelog from '../../../components/mods/ModChangelog.vue'
import { ChangelogEntry } from '../../../util/changelog'
import { CoreChangelog } from '../../../util/corechangelog'

export default defineComponent({
  components: {
    ModChangelog,
  },

  computed: {
    getChangelog(): ChangelogEntry[] {
      return CoreChangelog
    },
  },
})
</script>
