<template>
  <div>
    <ModHome mod="mobs" />
    <div class="flex justify-center">
      <img
        class="border-black border-2 py-0"
        src="\mods\mobs\mobs.png"
      >
    </div>
    <br>
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/mobs/ice-pixie"
          >
            Ice Pixie
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/mobs/treasure-mob"
          >
            Treasure Mob
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/mobs/eight-bit"
          >
            8-Bit Mobs
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/mobs/sea-creatures"
          >
            Sea Creatures
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Mobs'
})
</script>
