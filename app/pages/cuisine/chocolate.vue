<template>
  <div id="content">
    <h1><a name="chocolate">Chocolate</a></h1>
    <p>
      Making chocolate is a long chain of crafting steps. Grind the beans, mix the dust with
      milk, heat it, and then either eat it, set it into bars, or bake it into something else.
    </p>

    <h2><a name="mortar_and_pestle">Mortar and Pestle</a></h2>
    <p>
      The mortar and pestle grinds cocoa beans. Like the knife and the whisk it stays in the
      crafting grid and wears out a little with every use.
    </p>
    <Recipe id="assortedcuisine:mortar_and_pestle" />

    <h2><a name="dust">Cocoa Dust</a></h2>
    <p>Ground down in a mortar and pestle, cocoa beans give cocoa dust.</p>
    <Recipe id="assortedcuisine:cocoa_dust" />

    <h2><a name="bowl">Chocolate Bowl</a></h2>
    <p>
      Combine cocoa dust and milk in a bowl to make cold chocolate. Any milk
      bucket will do, including the ones <NuxtLink to="/tools">Assorted Tools</NuxtLink> adds.
    </p>
    <Recipe id="assortedcuisine:chocolate_bowl" />

    <h2><a name="hot">Hot Chocolate</a></h2>
    <p>Heat the bowl in a furnace and it becomes hot chocolate.</p>
    <Recipe id="assortedcuisine:hot_chocolate_smelting" />

    <h2><a name="ball">Chocolate Balls</a></h2>
    <p>
      You can eat the hot chocolate rolled into balls or use them to make a cake and pie.
    </p>
    <Recipe id="assortedcuisine:chocolate_ball" />

    <h2><a name="mould">Chocolate Bar Mould</a></h2>
    <p>
      Place the mould and right click it with hot chocolate to pour. It steams while it sets, and
      every block of ice or snow packed against its sides cools it faster. Once it has set, right
      click the mould for the bars.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:chocolate_bar_mould" />
      <Recipe id="assortedcuisine:chocolate_moulding" />
    </div>

    <h2><a name="bar">Chocolate Bars</a></h2>
    <p>
      Make a wrapper to wrap the Chocolate bars to make it complete.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:chocolate_bar" />
      <Recipe id="assortedcuisine:wrapper" />
      <Recipe id="assortedcuisine:chocolate_bar_wrapped" />
    </div>

    <h2><a name="storage">Storage</a></h2>
    <p>Nine bars press into a block, and a block converts back to 9 chocolate bars.</p>
    <Recipe id="assortedcuisine:chocolate_block" />

    <h2><a name="cake">Chocolate Cake</a></h2>
    <p>
      Chocolate balls and milk make a tasty Chocolate Cake.
    </p>
    <Recipe id="assortedcuisine:chocolate_cake" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Chocolate'
})
</script>
