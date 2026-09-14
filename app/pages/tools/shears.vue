<template>
  <div id="content">
    <h1><a name="shears">Shears</a></h1>
    <p>
      This mod adds Shears with any default material seen below as well as all of the materials
      provided in <NuxtLink
        class="page-link"
        to="/core/materials"
      >
        Assorted Core
      </NuxtLink>. These extra Shears work
      the exact same way that vanilla Shears work except that their durability is dependant on the
      material that they are made out of.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtools:wood_shears" />
      <Recipe id="assortedtools:stone_shears" />
      <Recipe id="assortedtools:gold_shears" />
      <Recipe id="assortedtools:diamond_shears" />
      <Recipe id="assortedtools:netherite_shears" />
    </div>
    <p>You are able to upgrade from Diamond Shears to Netherite Shears using a Netherite ingot.</p>
    <Recipe id="assortedtools:netherite_shears_smithing" />

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
