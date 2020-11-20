<template>
  <div id="content">
    <h1><a name="colorizer">Colorizer</a></h1>
    <p>
      Colorizers are blocks that can take on the appearance of most blocks. There are many different
      colorizers available from variants of already existing blocks like Doors, Stairs, or Fences.
      There are also new types of blocks that can represent furniture or adding slopes.
    </p>
    <h2><a name="block">Colorizer Block</a></h2>
    <p>
      The base <i>Colorizer Block</i> is required to all the other types of blocks that are
      possible. The red, green, and blue dye are required while the other can be substituted with
      any dye. The can be any stone.
    </p>
    <img src="\src\assets\mods\decor\colorizer_recipe.png" />
    <h2><a name="brush">Colorizer Brush</a></h2>
    <img src="\src\assets\mods\decor\brush_recipe.png" />
    <p>
      The <i>Colorizer Brush</i> is the method that you use to texture all of the different
      colorizer blocks. You can right click on a block you want to use and if you don't already have
      a block selected and the block is supported it will consume the block and set the texture for
      the brush. If the brush consumes a block is configurable. Once you have a brush setup just
      right click on a <i>Colorizer Block</i> to texture it.
    </p>
    <img src="\src\assets\mods\decor\brush.png" />
    <p>
      After you set a block the <i>Colorizer Brush</i> has 16 uses before or reverts to the empty
      version. If you need to clear the selected block before the uses are up you can put the brush
      in a crafting table with a bucket of water.
    </p>
    <img src="\src\assets\mods\decor\brush_wash_recipe.png" />
    <p>
      If you are in creative mode you can shift-right click to change to a new block without needing
      to wash the brush.
    </p>
    <h2><a name="other">Other Colorizers</a></h2>
    <p>
      The different colorizers will be broken into 3 different pages grouping the related ones
      together.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <router-link
          class="font-bold underline text-gray-500 hover:text-black visited:text-purple-600"
          :to="{ name: 'Furniture' }"
          >Furniture</router-link
        >
      </li>
      <li>
        <router-link
          class="font-bold underline text-gray-500 hover:text-black visited:text-purple-600"
          :to="{ name: 'Fireplaces' }"
          >Fireplaces</router-link
        >
      </li>
      <li>
        <router-link
          class="font-bold underline text-gray-500 hover:text-black visited:text-purple-600"
          :to="{ name: 'Slopes' }"
          >Slopes</router-link
        >
      </li>
    </ul>
  </div>
</template>
