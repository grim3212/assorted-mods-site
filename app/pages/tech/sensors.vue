<template>
  <div id="content">
    <h1><a name="sensors">Sensors</a></h1>
    <p>
      Sensors are block types that scan the area they are facing and will become powered if they see
      an entity of their type in view of their range. You are able to adjust the range of the sensor
      by right-clicking and shift-right clicking on them with an empty hand.
    </p>
    <img src="\mods\tech\sensors.png">

    <br>
    <p>
      You can also view the range by right clicking on them with a redstone torch. The area will be
      green if there are no blocks blocking the range and red if so.
    </p>
    <img src="\mods\tech\sensors_visible_range.png">
    <br>
    <p>There are many different types of sensors each one follows the same recipe pattern.</p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\tech\iron_sensor_recipe.png">
      <img src="\mods\tech\emerald_sensor_recipe.png">
    </div>
    <h2><a name="types">Types</a></h2>
    <p>
      The current list of sensor types are below, some use entity_type tags to check if any given
      entity is within the current tag.
    </p>
    <ul class="list-disc list-inside">
      <li>Wood - Any entity</li>
      <li>Stone - Living entities</li>
      <li>Iron - Player entities</li>
      <li>Mossy Cobblestone - Monster entities</li>
      <li>
        Prismarine - Water Animals and any entities in the entity_type tag
        (<b>assortedtech:sensors/water</b>)
      </li>
      <li>Gold - Item entities</li>
      <li>Emerald - Villager entities</li>
      <li>Netherrack - Any entities in the entity_type tag (<b>assortedtech:sensors/nether</b>)</li>
      <li>Cobweb - Any entities in the entity_type tag (<b>assortedtech:sensors/arthropods</b>)</li>
      <li>End Stone - Any entities in the entity_type tag (<b>assortedtech:sensors/end</b>)</li>
      <li>Hay Bale - Any entities in the entity_type tag (<b>assortedtech:sensors/pets</b>)</li>
      <li>Feather - Any entities in the entity_type tag (<b>assortedtech:sensors/flying</b>)</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tech | Sensors'
})
</script>
