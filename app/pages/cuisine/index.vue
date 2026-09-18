<template>
  <div>
    <ModHome mod="cuisine" />
    <div class="flex justify-center">
      <img
        class="border-black border-2 py-0"
        src="\mods\cuisine\cuisine.png"
      >
    </div>
    <br>
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/dairy"
          >
            Dairy
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/food"
          >
            Food
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/chocolate"
          >
            Chocolate
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/dragon-fruit"
          >
            Dragon Fruit
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/pies"
          >
            Pies
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/soda"
          >
            Soda
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/sweets"
          >
            Sweets
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            to="/cuisine/healing"
          >
            Healing
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Cuisine'
})
</script>
