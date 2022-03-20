<template>
  <div id="content">
    <h1><a name="gravity">Gravity</a></h1>
    <p>
      Have you wanted to control the movement of entities in a range. Then you can with these blocks
      below! All gravity blocks can be Right-Clicked to adjust the range that it has. If you would
      like to see the current range you can Right-Click on them with a Redstone Torch in your hand
      to toggle the bounds.
    </p>
    <img src="\mods\tech\gravity_bounds.png" />

    <h2><a name="attractor">Attractor</a></h2>
    <p>
      The Attractor as the name suggests pulls entities towards it when provided with a redstone
      signal. The directional variant only pulls entities in the range in the direction the block is
      placed.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\tech\attractor_recipe.png" />
      <img src="\mods\tech\attractor_directional_recipe.png" />
    </div>

    <h2><a name="repulsor">Repulsor</a></h2>
    <p>
      The Repulsor as the name suggests pushes entities away from it when provided with a redstone
      signal. The directional variant only pushes entities in the range in the direction the block
      is placed.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\tech\repulsor_recipe.png" />
      <img src="\mods\tech\repulsor_directional_recipe.png" />
    </div>

    <h2><a name="gravitor">Gravitor</a></h2>
    <p>
      The Gravitor is a block that when powered makes entities float inside the range. The
      directional variant only floats entities in the range in the direction the block is placed.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\tech\gravitor_recipe.png" />
      <img src="\mods\tech\gravitor_directional_recipe.png" />
    </div>

    <h2><a name="gravity_boots">Gravity Boots</a></h2>
    <p>
      Gravity Boots if they are on a player will stop the effects of the all of the gravity blocks
      from doing anything to the player. They also will negate the Gravity Lift from
      <router-link class="page-link" :to="{ name: 'Bridges' }">Bridges</router-link>.
    </p>
    <img src="\mods\tech\gravity_boots_recipe.png" />
  </div>
</template>
