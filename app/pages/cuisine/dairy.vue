<template>
  <div id="content">
    <h1><a name="dairy">Dairy</a></h1>
    <p>
      We have two machines that convert milk into a Dairy product.
    </p>
    <img src="\mods\cuisine\machines.png">

    <h2><a name="butter_churn">Butter Churn</a></h2>
    <p>
      Right click the churn with a milk bucket to fill it. Every right
      click while it is working speeds up the output. Right click once more
      when it is done for some butter.
    </p>
    <Recipe id="assortedcuisine:butter_churn" />

    <h2><a name="cheese_maker">Cheese Maker</a></h2>
    <p>
      The cheese maker takes a milk bucket and ages cheese slowly.
      Watch it turn from pale to a yellow orange, right click it to
      get your cheese.
    </p>
    <Recipe id="assortedcuisine:cheese_maker" />

    <h2><a name="making">What Goes In</a></h2>
    <p>
      Both machines take any milk bucket, and both hand the empty bucket back with the result.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:churning" />
      <Recipe id="assortedcuisine:cheese_making" />
    </div>

    <h2><a name="cheese">Cheese</a></h2>
    <p>A block of cheese cuts into nine pieces, and nine pieces press back into a block.</p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:cheese" />
      <Recipe id="assortedcuisine:cheese_block" />
    </div>

    <h2><a name="hot_cheese">Hot Cheese</a></h2>
    <p>
      Melted cheese can be used to make grilled cheese sandwiches. The
      sandwiches it goes into are on the <NuxtLink to="/cuisine/food">
        Food
      </NuxtLink> page.
    </p>
    <Recipe id="assortedcuisine:hot_cheese" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Dairy'
})
</script>
