<template>
  <div id="content">
    <h1><a name="pokeball">Pokeball</a></h1>
    <p>
      Pokeballs are amazing items that when thrown and hit a mob capture the mob inside. When thrown
      again the mob will be released. Be aware these do not tame the mob and that this saves the
      mobs data when captured and will be released exactly as before.
    </p>
    <img src="\mods\tools\pokeball_recipe.png">
    <h2><a name="displaying">Displaying</a></h2>
    <p>
      If you would like to be able to display your captured mobs you can do so via the
      <NuxtLink class="page-link" to="/decor/cage">
        Cage
      </NuxtLink> that
      <NuxtLink class="page-link" to="/decor">
        Assorted Decor
      </NuxtLink> adds.
      The exact mob will be displayed even if it is a baby or some variant the one stored in the
      Pokeball will be shown.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Pokeball'
})
</script>
