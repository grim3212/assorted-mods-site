<template>
  <div id="content">
    <h1><a name="food">Food</a></h1>
    <p>
      Eggs, sandwiches, and the two tools that allow you to make the rest of the food. The knife and the
      whisk both stay in the crafting grid instead of being used up.
    </p>

    <h2><a name="eggs">Eggs</a></h2>
    <p>
      Crack eggs into a pan, mix them with a whisk, then cook them in a furnace. Cooked eggs can be a filling meal.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:eggs_unmixed" />
      <Recipe id="assortedcuisine:eggs_mixed" />
      <Recipe id="assortedcuisine:eggs_cooked_smelting" />
    </div>

    <h2><a name="sandwiches">Sandwiches</a></h2>
    <p>
      Bread cuts into slices, and slices with meat and cheese can make a burger. The
      hot cheese it needs comes from Cheese Maker in <NuxtLink to="/cuisine/dairy">
        Dairy
      </NuxtLink>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:bread_slice" />
      <Recipe id="assortedcuisine:cheese_burger" />
    </div>

    <h2><a name="knife">Knife</a></h2>
    <p>
      The knife slices bread and pumpkins, and cuts a <NuxtLink to="/cuisine/dragon-fruit">
        Dragon Fruit
      </NuxtLink> out of a cactus.
    </p>
    <Recipe id="assortedcuisine:knife" />

    <h2><a name="whisk">Whisk</a></h2>
    <p>The whisk beats eggs, and wears out the same way the knife does.</p>
    <Recipe id="assortedcuisine:whisk" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Food'
})
</script>
