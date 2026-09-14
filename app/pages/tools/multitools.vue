<template>
  <div id="content">
    <h1><a name="multitools">MultiTools</a></h1>
    <p>
      Multitools are one combined tool to do all the work of the parts it is made out of. This will
      help save hotbar space so you only need one tools rather than 5.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtools:wooden_multitool" />
      <Recipe id="assortedtools:stone_multitool" />
      <Recipe id="assortedtools:golden_multitool" />
      <Recipe id="assortedtools:iron_multitool" />
      <Recipe id="assortedtools:diamond_multitool" />
      <Recipe id="assortedtools:netherite_multitool" />
    </div>
    <p>
      You are able to upgrade from Diamond MultiTool to Netherite MultiTool using a block of
      Netherite.
    </p>
    <Recipe id="assortedtools:netherite_multitool_smithing" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | MultiTools'
})
</script>
