<template>
  <div id="content">
    <h1><a name="spears">Spears</a></h1>
    <p>
      This mod adds Spears with any default Minecraft tool material as well as all of the tool
      materials provided in <router-link to="Materials" class="page-link">Assorted Core</router-link> materials. These
      spears function similar to tridents in the fact that they can damage entities by swinging as
      well as they are able to be thrown from the hand. All spears recipes for each material can use
      one or the other recipes shown below as an example.
    </p>
    <img src="\mods\tools\spears_all.png" />
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\tools\spear_recipe.png" />
      <img src="\mods\tools\spear_recipe_alt.png" />
      <img src="\mods\tools\other_spear_recipe.png" />
      <img src="\mods\tools\other_spear_recipe_alt.png" />
    </div>
    <p>The Diamond Spear is also able to upgraded to the Netherite Spear using a smithing table.</p>
    <img src="\mods\tools\netherite_spear_smithing.png" />
    <h2><a name="enchantments">Enchantments</a></h2>
    <p>
      Besides just the being able to throw the spears you are also able to enchantment them with an
      assortment of different enchantments. Some of the enchantments only spears are able to get.
      The current list of enchanments is below:
    </p>
    <ul class="list-disc list-inside">
      <li>Curse of Vanishing</li>
      <li>Mending</li>
      <li>Unbreaking</li>
      <li>Impaling</li>
      <li>Loyalty</li>
      <li>Flammable</li>
      <li>Unstable</li>
      <li>Conductive</li>
      <li>Bounciness</li>
    </ul>
    <h2><a name="vanilla-enchants">Vanilla Enchantments</a></h2>
    <p>
      The top 5 enchantments function the exact same way as they do in Vanilla. Specifically
      Impaling and Loyalty function just like they would on a Trident. So, if you have Loyalty it
      will come back to you, and Impaling does extra damage on Water creatures.
    </p>
    <h2><a name="spear-enchants">Spear Enchantments</a></h2>
    <p>
      The bottom 4 enchantments are added just for the spears themselves. Each is very similar to
      old functionality from a previous version of the spears.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <b>Flammable</b> (max-level:1) - When it hits a block it will try to spawn fire around the
        area that it lands. Flammable is not compatible with Unstable.
      </li>
      <li>
        <b>Unstable</b> (max-level:2) - When it hits a block or an entity it will cause an
        explosion. The size of the explosion is determined by the level. Unstable is not compatible
        with any of the 4 added enchantments.
      </li>
      <li>
        <b>Conductive</b> (max-level:3) - When it hits a block or an entity it will try and cause a
        lightning strike. Each level improves the chances of the lightning strike happening
        (configurable). Conductive is not compatible with Unstable.
      </li>
      <li>
        <b>Bounciness</b> (max-level:5) - When it hits a block it will try and bounce up to the
        number of levels you have. Bounciness is not compatible with Unstable.
      </li>
    </ul>
  </div>
</template>
