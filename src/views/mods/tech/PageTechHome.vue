<template>
  <div>
    <mod-home mod="tech"></mod-home>
    <div class="flex justify-center">
      <img class="border-black border-2 py-0" src="\mods\tech\tech.png" />
    </div>
    <br />
    <div class="flex justify-center">
      <ul class="list-none">
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Fans' }"
            >Fans</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Sensors' }"
            >Sensors</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Spikes' }"
            >Spikes</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Bridges' }"
            >Bridges</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Gravity' }"
            >Gravity</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Alarm' }"
            >Alarm</router-link
          >
        </li>
        <li>
          <router-link
            class="text-gray-300 hover:text-gray-500 text-lg block mb-2 mx-4 no-underline"
            :to="{ name: 'Torches' }"
            >Torches</router-link
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
