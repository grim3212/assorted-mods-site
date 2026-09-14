<template>
  <div id="content">
    <h1><a name="wands">Wands</a></h1>
    <p>
      This mod adds 3 types of Magic Wands (Building Wands, Mining Wands, and Breaking Wands). Each
      wand type has its own special modes that do special things based on what mode the wand is
      currently in. Each wand will have a tooltip with what mode it currently is in. If you want to
      cycle through the allowed modes click <b>Z</b> by default. A chat message with the new mdoe
      should appear.
    </p>
    <br>
    <p>
      To get started right click a block and click on another block if the current mode and area
      used on is allowed then it will perform <i>magic</i>. There are also a few other things in the
      mods config that change different things. Go experiment and have fun! :D
    </p>
    <h2><a name="basic">Basic Wands</a></h2>
    <p>
      These are the 3 types of regular wands available. The Breaking Wand is for destruction and
      will not give any drops. The Mining Wand helps mine and will make blocks drop. The Building
      Wand helps you build with different modes for different ways to fill in the area given.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtools:building_wand" />
      <Recipe id="assortedtools:breaking_wand" />
      <Recipe id="assortedtools:mining_wand" />
    </div>
    <h2><a name="basic">Reinforced Wands</a></h2>
    <p>
      These are the 3 types of reinforced wands available. These wands allow you to work more by
      giving the wands more uses as well as adding extras to the possible modes.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtools:reinforced_building_wand" />
      <Recipe id="assortedtools:reinforced_breaking_wand" />
      <Recipe id="assortedtools:reinforced_mining_wand" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Wands'
})
</script>
