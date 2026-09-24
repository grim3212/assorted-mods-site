<template>
  <div id="content">
    <h1><a name="scuba_suit">Scuba Suit</a></h1>
    <p>
      The scuba suit works in halves to allow for an easier time under water. The mask and tank
      together let you breathe under water and see better than you would without it. The legs and
      fins together move you through water far quicker than regular swimming.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedtools:scuba_helmet" />
      <Recipe id="assortedtools:scuba_chestplate" />
      <Recipe id="assortedtools:scuba_leggings" />
      <Recipe id="assortedtools:scuba_boots" />
    </div>

    <h2><a name="lava_suit">Lava Suit</a></h2>
    <p>
      The lava suit is like the scuba suit and works in lava. A full set will allow you to safely traverse through lava and become immune to fire.
      Having just the boots will allow you to walk on Magma and other "hot" blocks without taking damage.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedtools:lava_helmet" />
      <Recipe id="assortedtools:lava_chestplate" />
      <Recipe id="assortedtools:lava_leggings" />
      <Recipe id="assortedtools:lava_boots" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Scuba and Lava Suits'
})
</script>
