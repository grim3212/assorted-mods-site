<template>
  <div id="content">
    <h1><a name="extra">Extra Decor</a></h1>
    <p>
      This is where additions don't really fit into their own page as they act similarly or the same
      as a vanilla block already.
    </p>
    <h2><a name="chain_link">Chain Link</a></h2>
    <img src="\mods\decor\chain_link_fence.png">
    <p>
      Chain Links allow for the construction of Chain Link fences and Chain Link doors. To build
      those you must first craft some chain links.
    </p>
    <img src="\mods\decor\chain_link_recipe.png">
    <p>
      You are able to craft Chain Links with other metals as long as a mod is installed alongside
      this one like
      <NuxtLink class="page-link" to="/core/materials">
        Assorted Core
      </NuxtLink>.
    </p>
    <img src="\mods\decor\chain_link_alt_recipes.png">

    <h2><a name="chain_link_fence">Chain Link Fence</a></h2>
    <img src="\mods\decor\chain_link_fence_recipe.png">
    <p>
      Chain Links Fences work just like Iron Bars do and will connect to solid blocks alongside
      them.
    </p>

    <h2><a name="doors">Doors</a></h2>
    <img src="\mods\decor\new_doors.png">
    <p>
      There are currently 4 new doors in Assorted Decor. Quartz, Steel, Glass, and Chain Link. The
      Quartz and Steel door both function the same as the Iron Door in vanilla. The Steel door is
      able to crafted if a mod is installed alongside it that includes steel like
      <NuxtLink class="page-link" to="/core/materials">
        Assorted Core
      </NuxtLink>.
    </p>
    <br>
    <p>
      <i>These doors can all be locked like the Vanilla Doors if you have
        <NuxtLink class="page-link" to="/storage/locksmith">Assorted Storage</NuxtLink>
        installed.</i>
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\decor\quartz_door_recipe.png">
      <img src="\mods\decor\steel_door_recipe.png">
      <img src="\mods\decor\glass_door_recipe.png">
      <img src="\mods\decor\chain_link_door_recipe.png">
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Extra Decorations'
})
</script>
