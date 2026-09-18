<template>
  <div id="content">
    <h1><a name="sweets">Sweets</a></h1>
    <p>
      Powdered sugar makes sweets, and powdered sweets make some candy.
    </p>

    <h2><a name="sweets_recipes">Making Them</a></h2>
    <p>
      Powdered sweets are also in the recipe for the super health pack on the
      <NuxtLink to="/cuisine/healing">
        Healing
      </NuxtLink> page.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:powered_sugar" />
      <Recipe id="assortedcuisine:sweets" />
      <Recipe id="assortedcuisine:powered_sweets" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Sweets'
})
</script>
