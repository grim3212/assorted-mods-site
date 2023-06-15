<template>
  <div id="content">
    <h1><a name="cage">Cage</a></h1>
    <p>Cages are blocks that can be used to display mobs like they have been captured.</p>
    <h2><a name="recipe">Recipe</a></h2>
    <img src="\mods\decor\cage_recipe.png">
    <p>
      Currently the only items supported for display purposes are Spawn Eggs and
      <NuxtLink class="page-link" to="/tools/pokeball">
        Pokeballs
      </NuxtLink> from
      <NuxtLink class="page-link" to="/tools">
        Assorted Tools
      </NuxtLink>.
      Whatever the state of the Entity looks like within the
      <NuxtLink class="page-link" to="/tools/pokeball">
        Pokeball
      </NuxtLink> will be shown
      so baby animals and variants are supported unlike the Spawn Eggs.
    </p>
    <img src="\mods\decor\cage.gif">
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Cage'
})
</script>
