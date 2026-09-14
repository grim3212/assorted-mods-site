<template>
  <div id="content">
    <h1><a name="torches">Torches</a></h1>
    <h2><a name="glowstone">Glowstone Torch</a></h2>
    <p>This is a simple torch that if powered will emit a strong light level.</p>
    <Recipe id="assortedtech:glowstone_torch" />

    <h2><a name="flip_flop">Flip-Flop Torch</a></h2>
    <p>
      Works just like a flip-flop logic gate, provide it power it holds it. Power it again and it no
      longer is providing power.
    </p>
    <Recipe id="assortedtech:flip_flop_torch" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Torches'
})
</script>
