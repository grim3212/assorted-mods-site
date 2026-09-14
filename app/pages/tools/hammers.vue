<template>
  <div id="content">
    <h1><a name="hammers">Hammers</a></h1>
    <p>
      Hammers are new tools that on use will destroy the block in one hit but not drop the items. So if you have a huge mountain of dirt to get rid of this will be very helpful.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtools:wood_hammer" />
      <Recipe id="assortedtools:stone_hammer" />
      <Recipe id="assortedtools:gold_hammer" />
      <Recipe id="assortedtools:iron_hammer" />
      <Recipe id="assortedtools:diamond_hammer" />
      <Recipe id="assortedtools:netherite_hammer" />
      <Recipe id="assortedtools:netherite_hammer_smithing" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Hammers'
})
</script>
