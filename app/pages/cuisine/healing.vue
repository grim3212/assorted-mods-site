<template>
  <div id="content">
    <h1><a name="healing">Healing</a></h1>
    <p>
      These three can instantly heal you. Each one takes a moment to apply, and being hit interrupts it. None of them do anything
      while you are already on full health.
    </p>

    <h2><a name="packs">Bandages and Packs</a></h2>
    <p>
      The bandage is the cheapest one and heals the least, the health pack is in the middle, and the super pack needs powdered
      sweets from the <NuxtLink to="/cuisine/sweets">
        Sweets
      </NuxtLink> page but is the most powerful.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedcuisine:bandage" />
      <Recipe id="assortedcuisine:healthpack" />
      <Recipe id="assortedcuisine:healthpack_super" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine | Healing'
})
</script>
