<template>
  <div id="content">
    <h1><a name="pies">Pies</a></h1>
    <p>
      Every pie starts as dough in a pan, gets a filling, and then bakes in a furnace. A baked pie
      can be placed and eaten a slice at a time, the way a cake works.
    </p>
    <img src="\mods\cuisine\pies.png">

    <h2><a name="ingredients">Ingredients</a></h2>
    <p>
      The pan is reusable and the dough is not. Pumpkin slices are the one filling you have to cut
      yourself.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:pan" />
      <Recipe id="assortedcuisine:dough" />
      <Recipe id="assortedcuisine:pumpkin_slice" />
    </div>

    <h2><a name="raw">Filling a Pie</a></h2>
    <p>
      Make an empty pie, then fill it with apple, pumpkin, melon or pork. A raw pie cannot be eaten.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:raw_empty_pie" />
      <Recipe id="assortedcuisine:raw_apple_pie" />
      <Recipe id="assortedcuisine:raw_pumpkin_pie" />
      <Recipe id="assortedcuisine:raw_melon_pie" />
      <Recipe id="assortedcuisine:raw_pork_pie" />
    </div>

    <h2><a name="baking">Baking</a></h2>
    <p>A raw pie bakes in a furnace, and what comes out is the block you place and can eat.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:apple_pie_smelting" />
      <Recipe id="assortedcuisine:pumpkin_pie_smelting" />
      <Recipe id="assortedcuisine:melon_pie_smelting" />
      <Recipe id="assortedcuisine:pork_pie_smelting" />
    </div>

    <h2><a name="chocolate">Chocolate Pie</a></h2>
    <p>
      Chocolate balls fill a pie too, and it bakes the same way. Just grab some Chocolate Balls from the <NuxtLink to="/cuisine/chocolate">
        Chocolate
      </NuxtLink> page.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:raw_chocolate_pie" />
      <Recipe id="assortedcuisine:chocolate_pie_smelting" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Pies'
})
</script>
