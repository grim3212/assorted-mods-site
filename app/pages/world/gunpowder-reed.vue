<template>
  <div id="content">
    <h1><a name="gunpowder_reed">Gunpowder Reed</a></h1>
    <p>
      Gunpowder Reed is a plant that grows like sugar cane but gives you gunpowder instead. It is a
      renewable source so you do not have to hunt creepers for it.
    </p>
    <img src="\mods\world\gunpowder_reeds.png">

    <h2><a name="growing">Growing</a></h2>
    <p>
      It follows the same rules as sugar cane. Plant it on dirt, sand, or another block sugar cane
      accepts with water next to the block underneath it, and it grows on its own up to 3 blocks
      tall. Without water it breaks straight away.
    </p>
    <p>
      The reed gives off a small amount of light and is almost immune to explosions, so a blast next
      to a patch will not clear it out.
    </p>

    <h2><a name="generation">Generation</a></h2>
    <p>
      Patches generate naturally in every Overworld biome, along water the same way sugar cane does.
      Each patch is 2 to 4 blocks tall.
    </p>

    <h2><a name="crafting">Crafting</a></h2>
    <p>
      If you would rather start a patch from what you already have, eight gunpowder around a sugar
      cane makes a Gunpowder Reed.
    </p>
    <Recipe id="assortedworld:gunpowder_reed" />
    <p>A single reed on its own turns back into one gunpowder.</p>
    <Recipe id="assortedworld:gunpowder" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World | Gunpowder Reed'
})
</script>
