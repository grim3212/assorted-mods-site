<template>
  <div id="content">
    <h1><a name="eight_bit">8-Bit Mobs</a></h1>
    <p>Two creatures from the old 8-bit games, the parabuzzy and the Bob-omb.</p>
    <img src="\mods\mobs\eight_bit.png">

    <h2><a name="parabuzzy">Parabuzzy</a></h2>
    <p>
      A winged shell that hovers more than it falls and hunts monsters. Parabuzzies spawn all over the overworld.
    </p>
    <p>
      They come in blue and red, and in spiked versions of each.
    </p>

    <h2><a name="perching">On Your Head</a></h2>
    <p>
      A fish tames a parabuzzy and food heals a tame one. Right click a tamed parabuzzy and it climbs onto
      your head. There it slowly heals, and you drift down as gently as it does and take no fall
      damage. Sneak on the ground to put it down.
    </p>

    <h2><a name="bobomb">Bob-omb</a></h2>
    <img src="\mods\mobs\bobomb.png">
    <p>
      A Bob-omb is built from a parabuzzy's shell. One you put down follows you, and when a monster
      hurts you it walks up to it and lights its fuse, going off a moment later. Be careful when hitting one yourself, as any hit lights its fuse.
    </p>
    <p>
      A Bob-omb will ride on your head too. Sneak and use one with an empty hand to pick it back up.
    </p>
    <Recipe id="assortedmobs:bobomb" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Mobs | 8-Bit Mobs'
})
</script>
