<template>
  <div>
    <ModHome mod="core" />
    <div class="flex justify-center">
      <img class="border-black border-2 py-0" src="\mods\core\core.png">
    </div>
    <br>
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/core/machines"
          >
            Machines
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/core/materials"
          >
            Materials
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Core'
})
</script>
