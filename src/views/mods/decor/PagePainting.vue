<template>
  <div id="content">
    <h1><a name="painting">Painting</a></h1>
    <p>
      Assorted Decor adds the ability to paint Decor blocks as well as some Vanilla blocks. To do
      this it uses Paint Rollers to apply the paint in the world and in crafting recipes.
    </p>
    <h2><a name="paint_roller">Paint Roller</a></h2>
    <p>
      This is the basic Paint Roller with no color applied to it. It is effectively useless as you
      can't do anything with it but craft the colored Paint Rollers.
    </p>
    <img src="\mods\decor\paint_roller_recipe.png" />
    <h2><a name="colors">Paint Roller Colors</a></h2>
    <p>
      These are the all powerful Paint Rollers that can apply all 16 default colors in Minecraft to
      a multitude of blocks. They are crafted with a matching dye and the basic Paint Roller above.
      They also have 64 uses to color 64 different things.
    </p>
    <img src="\mods\decor\paint_roller_color_recipe.png" />

    <p>
      They have a number of uses. They can color blocks in world, they can color blocks in crafting
      recipes, they can dye entities in world, and they can act as dye in Crafting recipes. Below is
      the current list of different Blocks and Entities that Paint Rollers can color.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <router-link class="page-link" :to="{ name: 'Roadways' }">Roadways</router-link>
      </li>
      <li>
        <router-link class="page-link" :to="{ name: 'Fluro' }">Fluro</router-link>
      </li>
      <li><router-link class="page-link" :to="{ name: 'Frames' }">Frames</router-link></li>
      <li><router-link class="page-link" :to="{ name: 'Wallpaper' }">Wallpaper</router-link></li>
      <li>Vertical/Horizontal Siding</li>
      <li>Wool</li>
      <li>Carpet</li>
      <li>Concrete Powder</li>
      <li>Concrete</li>
      <li>Dye Sheep</li>
    </ul>
    <img src="\mods\decor\paint_uses_recipe.png" />

    <h2><a name="siding">Siding</a></h2>
    <img src="\mods\decor\siding_example.png" />
    <p>
      To go with the Paint Rollers are some basic design blocks that can be painted using these
      Paint Rollers. These are aptly named <i>Horizontal Siding</i> and <i>Vertical Siding</i>.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\decor\horizontal_siding_recipe.png" />
      <img src="\mods\decor\vertical_siding_recipe.png" />
    </div>
  </div>
</template>
