<template>
  <div id="content">
    <h1><a name="ice_pixie">Ice Pixie</a></h1>
    <p>
      Ice pixies live in snowy biomes and can be found during both day and night. They throw ice at any
      player they see, and they move faster on ice and snow.
    </p>
    <img src="\mods\mobs\ice_pixie.png">

    <h2><a name="fire">Only Fire</a></h2>
    <p>
      Nothing hurts an ice pixie unless you are holding a torch or flint and steel when you hit it.
      Anything hot nearby burns will burn it too. Like torches, fire, campfires, magma, and lava.
    </p>

    <h2><a name="drops">Drops</a></h2>
    <p>
      Snowballs, and sometimes ice will drop when one is killed. They may also drop a
      frost rod when a mod adds them, such as
      <NuxtLink
        class="page-link"
        to="/tools/staffs"
      >
        Assorted Tools
      </NuxtLink>.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Mobs | Ice Pixie'
})
</script>
