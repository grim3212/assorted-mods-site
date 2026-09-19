<template>
  <div id="content">
    <h1><a name="gates">Gates</a></h1>
    <p>
      Castle gates and garage doors hang from the ceiling. Place one against the underside of a
      solid block and it fills down to the ground. Breaking any part of a gate takes the whole gate
      down and gives back the one item it was placed from.
    </p>
    <h2><a name="castle_gate">Castle Gate</a></h2>
    <p>
      Gates placed side by side and facing the same way open and close together. The gate trumpet can open a gate from afar. Redstone at the top block holds the gate open for as long
      as it is powered.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assorteddecor:gate_grating" />
      <Recipe id="assorteddecor:castle_gate" />
      <Recipe id="assorteddecor:gate_trumpet" />
    </div>
    <h2><a name="garage_door">Garage Door</a></h2>
    <p>
      A garage door hangs and fills down the same way a castle gate does. The garage remote opens and closes it from afar just like the gate trumpet does for a castle gate.
      Redstone at the top block works on it too.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assorteddecor:garage_panel" />
      <Recipe id="assorteddecor:garage_door" />
      <Recipe id="assorteddecor:garage_remote" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Gates'
})
</script>
