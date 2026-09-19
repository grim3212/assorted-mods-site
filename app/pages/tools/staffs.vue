<template>
  <div id="content">
    <h1><a name="staffs">Staffs</a></h1>
    <p>
      Each staff has several modes. Switch between them with the same key as the wands,
      <b>Z</b> by default.
    </p>
    <h2><a name="neptune">Neptune Staff</a></h2>
    <p>
      <b>Place Water</b> pours a water source where you click. <b>Freeze Mobs</b> freezes every mob
      around you solid, and <b>Freeze Water</b> turns the still water around you to ice. A frozen mob stands still and silent,
      turned to ice, until a Phoenix Staff thaws it or it catches fire.
    </p>
    <Recipe id="assortedtools:neptune_staff" />
    <h2><a name="phoenix">Phoenix Staff</a></h2>
    <p>
      The Neptune Staff's the opposite. <b>Place Lava</b> and <b>Place Fire</b> work where you click,
      <b>Thaw Mobs</b> frees every frozen mob around you, and <b>Melt Ice</b> melts the ice around
      you. A hit with it thaws a frozen mob.
    </p>
    <Recipe id="assortedtools:phoenix_staff" />
    <h2><a name="power">Power Staff</a></h2>
    <p>
      Right click a block to push it one step away from the face you clicked, or in a pull mode to
      drag it one step toward you. The <b>Floating</b> modes leave the block where it ends up and
      the <b>Dropping</b> modes let it fall. It moves what a piston could.
    </p>
    <Recipe id="assortedtools:power_staff" />
    <h2><a name="frost">Frost Rods</a></h2>
    <p>
      The blaze rod's cold counterpart. Strays drop them as blazes drop theirs, and any other
      monster killed by a player in a snowy biome (<b>c:is_snowy</b>) sometimes does. A frost rod
      grinds into two frost powder, and frost powder, gunpowder and a snowball make three ice
      charges.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedtools:frost_powder" />
      <Recipe id="assortedtools:ice_charge" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Staffs'
})
</script>
