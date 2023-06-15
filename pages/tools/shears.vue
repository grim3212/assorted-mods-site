<template>
  <div id="content">
    <h1><a name="shears">Shears</a></h1>
    <p>
      This mod adds Shears with any default material seen below as well as all of the materials
      provided in <NuxtLink class="page-link" to="/core/materials">
        Assorted Core
      </NuxtLink>. These extra Shears work
      the exact same way that vanilla Shears work except that their durability is dependant on the
      material that they are made out of.
    </p>
    <div class="grid grid-cols-3 gap-4">
      <img src="\mods\tools\wooden_shears_recipe.png">
      <img src="\mods\tools\stone_shears_recipe.png">
      <img src="\mods\tools\golden_shears_recipe.png">
      <img src="\mods\tools\diamond_shears_recipe.png">
      <img src="\mods\tools\netherite_shears_recipe.png">
    </div>
    <p>You are able to upgrade from Diamond Shears to Netherite Shears using a Netherite ingot.</p>
    <img src="\mods\tools\netherite_shears_smithing_recipe.png">

    <h2><a name="enchantments">Enchantments</a></h2>
    <p>
      Currently Assorted Tools only adds one extra enchantment for Shears `<b>Coral Cutter</b>`.
      This enchantment allows Shears to be able to pick up Coral without the need of a separate tool
      with Silk Touch.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Shears'
})
</script>
