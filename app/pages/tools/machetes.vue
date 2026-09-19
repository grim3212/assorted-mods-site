<template>
  <div id="content">
    <h1><a name="machetes">Machetes</a></h1>
    <p>
      A machete is a lighter, quicker sword that also cuts through leaves, vines, wool, cactus and
      the rest of the undergrowth at its material's speed. What it cuts is the block tag
      <b>assortedtools:mineable/machete</b>.
    </p>
    <p>
      There is a machete for every material, from wood up to netherite, and for each of the extra
      materials in
      <NuxtLink
        class="page-link"
        to="/tools/core-support"
      >
        Core Support
      </NuxtLink>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtools:wood_machete" />
      <Recipe id="assortedtools:stone_machete" />
      <Recipe id="assortedtools:gold_machete" />
      <Recipe id="assortedtools:iron_machete" />
      <Recipe id="assortedtools:diamond_machete" />
      <Recipe id="assortedtools:netherite_machete_smithing" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Machetes'
})
</script>
