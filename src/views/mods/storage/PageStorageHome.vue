<template>
  <div>
    <mod-home mod="storage"></mod-home>
    <div class="flex justify-center">
      <img class="border-black border-2 py-0" src="\mods\storage\storage.png" />
    </div>
    <br />
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Locksmith' }"
            >Locksmith</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'LockeableStorage' }"
            >Lockeable Storage</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'LockedEnderChest' }"
            >Locked Ender Chest</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Bags' }"
            >Bags</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'BetterStorage' }"
            >Better Storage</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'ItemTower' }"
            >Item Tower</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ModHome from '../../../components/mods/ModHome.vue'

export default defineComponent({
  components: {
    ModHome,
  },
})
</script>
