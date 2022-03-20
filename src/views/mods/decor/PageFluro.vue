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
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\decor\illumination_tube_iron.png" />
      <img src="\mods\decor\illumination_tube_aluminum.png" />
    </div>

    <h1><a name="illumination_plate">Illumination Plate</a></h1>
    <p>
      Illumination Plates are very similar to Illumination Tubes. You can place them on all sides of
      a block and they do not give off any particles. You are also able to waterlog them. These can
      also be used in conjunction with
      <router-link class="page-link" :to="{ name: 'Roadways' }">Roadways</router-link>.
    </p>
    <img src="\mods\decor\illumination_plate.png" />
    <img src="\mods\decor\illumination_plate_recipe.png" />

    <h1><a name="fluro_tube">Fluro Tube</a></h1>
    <p>
      These are the size of a regular block and are as bright as the basic Illumination Tube. These
      can be crafted with any of the 16 dyes available and follow the pattern as seen above with the
      3 examples. You are also able to paint these using <router-link class="page-link" :to="{ name: 'Painting' }">Paint Rollers</router-link>.
    </p>
    <div class="grid grid-cols-3 gap-4">
      <img src="\mods\decor\fluro_white.png" />
      <img src="\mods\decor\fluro_blue.png" />
      <img src="\mods\decor\fluro_pink.png" />
    </div>

    <img src="\mods\decor\fluro.png" />
  </div>
</template>
