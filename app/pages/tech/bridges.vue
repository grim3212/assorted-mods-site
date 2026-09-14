<template>
  <div id="content">
    <h1><a name="bridges">Bridges</a></h1>
    <p>
      laser bridges sound pretty cool right?! Well here is a variety of different Laser bridges to
      choose from.
    </p>
    <img src="\mods\tech\bridges.png">

    <h2><a name="attractor">Bridges</a></h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtech:bridge_control_laser" />
      <Recipe id="assortedtech:bridge_control_accel" />
      <Recipe id="assortedtech:bridge_control_trick" />
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedtech:bridge_control_death" />
      <Recipe id="assortedtech:bridge_control_gravity" />
    </div>

    <p>
      There are 5 different types of bridges to choose from. For a description of what each on can
      do check below.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <b>Laser</b> - Sends out bridge blocks that can be walked on top of for a popup bridge
      </li>
      <li>
        <b>Accel</b> - Sends out bridge blocks that can be walked on top of as well as provides a
        speed boost when walked on
      </li>
      <li>
        <b>Trick</b> - Sends out bridge blocks that have no collision so entities will fall through
        them
      </li>
      <li>
        <b>Death</b> - Sends out bridge blocks that have no collision so entities will fall through
        them and hurts entities that are inside
      </li>
      <li>
        <b>Gravity Lift</b> - Sends out bridge blocks that have no collision but when walked into
        will start sending entites in the direction they are facing.
      </li>
    </ul>

    <h2><a name="camo">Bridge Camo</a></h2>
    <img src="\mods\tech\bridge_camo.png">
    <p>
      If you right click on a bridge with a supported block the bridge blocks will be changed to
      look like that block. Shift Right-Click with an empty hand to clear the saved block.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Bridges'
})
</script>
