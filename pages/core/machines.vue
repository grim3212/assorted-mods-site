<template>
  <div id="content">
    <h1><a name="machines">Machines</a></h1>
    <p>
      Assorted Core adds two machines to process the ores that it adds. Once allows you to break
      ores and ingots down into the dust forms. The other allows you to smelt items together to
      create alloys.
    </p>
    <p>
      The machines added each have 4 tiers which determine how fast they process. The 4 tiers are
      Basic, Intermediate, Advanced, and Expert. <b>All machines are setup to support JEI.</b>
    </p>
    <h2><a name="machine_core">Machine Core</a></h2>
    <img src="\mods\core\machine_core_recipe.png">
    <p>
      To get started building the machines you will first need to craft a machine core that is used
      as the base for all machines.
    </p>

    <h2><a name="grinding_mill">Grinding Mill</a></h2>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\core\basic_grinding_mill_recipe.png">
      <img src="\mods\core\intermediate_grinding_mill_recipe.png">
      <img src="\mods\core\advanced_grinding_mill_recipe.png">
      <img src="\mods\core\expert_grinding_mill_recipe.png">
    </div>
    <p>
      The grinding mill can be used to break ores and ingots down farther. If using an ore it will
      usually double the output of what you would get if using a furnace. Though for most metals
      this will require you to smelt the output since it breaks it down into dust instead of ingots.
    </p>

    <p>
      The grinding mill requires a tool with harvest level >= 2. This will allow it to be able to
      break open the ores. Besides a tool you will need a fuel source to power it. This can be any
      fuel that furnaces can use. You are able to pipe in items via the top and sides with hoppers.
      You can use a hopper underneath the Grinding Mill to pull out the output.
    </p>

    <h3>Example Grinding Mill recipe:</h3>
    <img src="\mods\core\grinding_mill_example.png">

    <h2><a name="alloy_forge">Alloy Forge</a></h2>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\core\basic_alloy_forge_recipe.png">
      <img src="\mods\core\intermediate_alloy_forge_recipe.png">
      <img src="\mods\core\advanced_alloy_forge_recipe.png">
      <img src="\mods\core\expert_alloy_forge_recipe.png">
    </div>

    <p>
      The alloy forge is used to create new metals by combining materials or metals together and
      heating them up. It usually requires the dust of most metals as it is easier to heat up than
      the full ingots.
    </p>
    <p>
      The alloy forge requires two inputs and a fuel source. The fuel can be any that the furnace
      supports. You are able to pipe in items via the top and sides with hoppers. You can use a
      hopper underneath the Alloy Forge to pull out the output.
    </p>

    <h3>Added by Assorted Core:</h3>
    <p>
      Assorted Core adds support for the Alloy Forge to create Bronze, Electrum, Invar, and Steel alloys. They are shown below.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\core\bronze_alloy_recipe.png">
      <img src="\mods\core\electrum_alloy_recipe.png">
      <img src="\mods\core\invar_alloy_recipe.png">
      <img src="\mods\core\steel_alloy_recipe.png">
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Core | Machines'
})
</script>
