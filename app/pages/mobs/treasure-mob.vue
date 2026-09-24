<template>
  <div id="content">
    <h1><a name="treasure_mob">Treasure Mob</a></h1>
    <p>
      Now and then a chest walks off on its own. Treasure mobs turn up inside mineshafts, temples,
      strongholds, trial chambers, ancient cities, mansions, bastions, fortresses and end cities, and
      in the structures of
      <NuxtLink
        class="page-link"
        to="/world/ruins"
      >
        Assorted World
      </NuxtLink>
      when it is installed.
    </p>
    <p>
      Each one carries what that place's own chests would hold, anything from bread to diamonds, and
      drops all of it when it dies.
    </p>
    <img src="\mods\mobs\treasure_mob.png">

    <h2><a name="taming">Taming</a></h2>
    <p>
      A wild one keeps away from players, but gold nuggets lure it in. Feed it nuggets and it may
      decide to stay.
    </p>
    <p>
      A tamed treasure mob follows you and sits when told to. Sneak and use it to open it as a chest.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Mobs | Treasure Mob'
})
</script>
