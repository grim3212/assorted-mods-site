<template>
  <div>
    <ModHome mod="world" />
    <div class="flex justify-center">
      <img class="border-black border-2 py-0" src="\mods\world\world.png">
    </div>
    <br>
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/world/randomite"
          >
            Randomite
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/world/ruins"
          >
            Ruins
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'World'
})
</script>
