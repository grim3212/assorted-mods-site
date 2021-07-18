<template>
  <div>
    <mod-home mod="tools"></mod-home>
    <div class="flex justify-center">
      <img class="border-black border-2 py-0" src="\mods\tools\tools.png" />
    </div>
    <br />
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Pokeball' }"
            >Pokeball</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Wands' }"
            >Wands</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Spears' }"
            >Spears</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'ChickenSuit' }"
            >Chicken Suit</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Boomerang' }"
            >Boomerangs</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Hammers' }"
            >Hammers</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'MultiTools' }"
            >MultiTools</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'CoreSupport' }"
            >Core Support</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'MaterialConfig' }"
            >Material Config</router-link
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
