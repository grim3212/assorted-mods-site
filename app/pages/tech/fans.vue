<template>
  <div id="content">
    <h1><a name="fans">Fans</a></h1>
    <p>
      Fans are blocks that allow you to push/pull or blow/suck entities. It does this by the power
      of AIR!
    </p>
    <img src="\mods\tech\fan_recipe.png">

    <p>
      Fans can be configured however you like by using the GUI that opens when you right click on a
      fan. From within the GUI you can adjust the mode `Blow/Suck` as well as adjust the range. The
      range that it is set to directly affects the speed at which entities are moved along.
    </p>
    <img src="\mods\tech\fan_gui.png">

    <p>
      Fans can be turned off by powering them and when they no longer have a redstone power they
      will go back to whatever they were previously set to.
    </p>
    <img src="\mods\tech\fan_turn_off.png">

    <br>
    <p>
      You are able to configure the fans speed, max range, and if to show the air particles via the
      config file.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Fans'
})
</script>
