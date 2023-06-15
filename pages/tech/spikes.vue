<template>
  <div id="content">
    <h1><a name="spikes">Spikes</a></h1>
    <p>
      These are a block that when powered will start damaging any entity within the hitbox. They can
      be placed on any side of the block. The spikes damage depends on the material that it is built
      from. Each spike has a tooltip with the damage for that material.
    </p>
    <img src="\mods\tech\spikes_inventory.png">
    <br>
    <p>
      All spikes follow the same basic pattern as seen below. Assorted Tech currently supports all
      vanilla materials as well as all of the materials from
      <NuxtLink class="page-link" to="/core/materials">
        Assorted Core
      </NuxtLink>.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\tech\spike_recipe.png">
      <img src="\mods\tech\spike_gold_recipe.png">
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Spikes'
})
</script>
