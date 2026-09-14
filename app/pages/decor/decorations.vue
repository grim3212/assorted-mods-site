<template>
  <div id="content">
    <h1><a name="decorations">Decorations</a></h1>
    <p>
      Are you looking for a bit more decorations for interior design. Then check some of these
      blocks out!
    </p>
    <img src="\mods\decor\decorations.png">

    <h2><a name="decorations">Decorations</a></h2>
    <p>
      These decorations have a number of different designs that they can cycle between with a right
      click to find the right look just for you.
    </p>
    <br>
    <h3><a name="clay_decoration">Clay</a></h3>
    <p>
      The clay decoration you will need to make sure that you smelt the unfired version to be able
      to place the fired version.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assorteddecor:unfired_clay_decoration" />
      <Recipe id="assorteddecor:clay_decoration" />
    </div>
    <h3><a name="bone_decoration">Bone</a></h3>
    <Recipe id="assorteddecor:bone_decoration" />

    <h2><a name="lanterns">Lanterns</a></h2>
    <p>
      There are also Lanterns that are added to provide a bit of variety in interior lighting
      options. <i>All Lanterns crafting can use any Candle or any Torch</i>.
    </p>
    <br>
    <h3><a name="paper_lantern">Paper</a></h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assorteddecor:paper_lantern" />
    </div>
    <h3><a name="bone_lantern">Bone</a></h3>
    <Recipe id="assorteddecor:bone_lantern" />
    <h3><a name="iron_lantern">Iron</a></h3>
    <Recipe id="assorteddecor:iron_lantern" />

    <h2><a name="fountain">Fountain</a></h2>
    <Recipe id="assorteddecor:fountain" />
    <p>
      The Fountain is a block that when powered provides a tiny little splash of water effect.
    </p>
    <img src="\mods\decor\fountain.png">

    <h2><a name="stone">Stone</a></h2>
    <p>
      There are also some extra variants of stone that you can now get when you put stone in the
      Stonecutter.
    </p>
    <br>
    <h3><a name="decorative_stone">Decorative Stone</a></h3>
    <Recipe id="assorteddecor:decorative_path_stonecutting" />
    <h3><a name="stone_path">Stone Path</a></h3>
    <Recipe id="assorteddecor:stone_path_stonecutting" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Decorations'
})
</script>
