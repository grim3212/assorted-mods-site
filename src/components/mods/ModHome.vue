<template>
  <section class="text-gray-200">
    <div class="max-w-6xl mx-auto px-5 py-24">
      <div class="flex flex-wrap w-full mb-6 flex-col items-center text-center">
        <h2
          class="title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"
        >
          {{ details.name }}
        </h2>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          {{ details.description }}
        </p>
      </div>
      <div class="block inline-flex w-full place-content-center">
        <a
          class="inline-flex items-center text-sm px-1 py-1 mt-4 rounded hover:bg-gray-300 mr-6 hover:text-teal-500"
          :href="details.githubLink"
        >
          <svg class="fill-current h-5 w-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <title>GitHub</title>
            <path
              d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
            ></path>
          </svg>
          GitHub
        </a>
        <a
          class="inline-flex items-center text-sm px-1 py-1 mt-4 rounded hover:bg-gray-300 hover:text-teal-500"
          :href="details.downloadLink"
        >
          <svg
            class="fill-current h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Download</title>
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          Download
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ModDetails, getModDetails } from '../../util/mods'

export default defineComponent({
  props: {
    mod: {
      type: String,
      required: true,
    },
  },

  computed: {
    details(): ModDetails {
      return getModDetails(this.mod)
    },
  },
})
</script>
