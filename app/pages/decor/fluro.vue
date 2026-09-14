<template>
  <div id="content">
    <h1><a name="fluro">Fluro</a></h1>
    <p>
      Assorted Decor adds some extra lighting options to give you some variety to choose from. These
      come in the form of Illumination tubes.
    </p>
    <h1><a name="illumination_tube">Illumination Tube</a></h1>
    <p>
      These act like torches but a bit brighter. They also can be placed on all sides of a block
      including underneath. These do not give off any particles while placed.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assorteddecor:illumination_tube_iron" />
      <Recipe id="assorteddecor:illumination_tube" />
    </div>

    <h1><a name="illumination_plate">Illumination Plate</a></h1>
    <p>
      Illumination Plates are very similar to Illumination Tubes. You can place them on all sides of
      a block and they do not give off any particles. You are also able to waterlog them. These can
      also be used in conjunction with
      <NuxtLink
        class="page-link"
        to="/decor/roadways"
      >
        Roadways
      </NuxtLink>.
    </p>
    <img src="\mods\decor\illumination_plate.png">
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:illumination_plate" />
      <Recipe id="assorteddecor:illumination_plate_iron" />
    </div>

    <h1><a name="fluro_tube">Fluro Tube</a></h1>
    <p>
      These are the size of a regular block and are as bright as the basic Illumination Tube. These
      can be crafted with any of the 16 dyes available and follow the pattern as seen above with the
      3 examples. You are also able to paint these using <NuxtLink
        class="page-link"
        to="/decor/painting"
      >
        Paint Rollers
      </NuxtLink>.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assorteddecor:fluro_white" />
      <Recipe id="assorteddecor:fluro_blue" />
      <Recipe id="assorteddecor:fluro_pink" />
    </div>

    <img src="\mods\decor\fluro.png">
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Fluro'
})
</script>
