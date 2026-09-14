<template>
  <div>
    <ModHome mod="storage" />
    <div class="flex justify-center">
      <img class="border-black border-2 py-0" src="\mods\storage\storage.png">
    </div>
    <br>
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/storage/locksmith"
          >
            Locksmith
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/storage/storage-crates"
          >
            Storage Crates
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/storage/better-storage"
          >
            Better Storage
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/storage/bags"
          >
            Bags
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/storage/enderchest"
          >
            Locked Ender Chest
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/storage/lockeable"
          >
            Lockeable Storage
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/storage/item-tower"
          >
            Item Tower
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage'
})
</script>
