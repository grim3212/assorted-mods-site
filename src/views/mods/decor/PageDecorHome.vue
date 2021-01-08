<template>
  <div>
    <mod-home mod="decor"></mod-home>
    <div class="flex justify-center">
      <img class="border-black border-2 py-0" src="\mods\decor\decor.png" />
    </div>
    <br />
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Colorizer' }"
            >Colorizer</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Furniture' }"
            >Furniture</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Slopes' }"
            >Slopes</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Fireplaces' }"
            >Fireplaces</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Planter' }"
            >Planter Pot</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Wallpaper' }"
            >Wallpaper</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Frames' }"
            >Frames</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'NeonSign' }"
            >Neon Sign</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Fluro' }"
            >Fluro</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'ExtraDecor' }"
            >Extras</router-link
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
