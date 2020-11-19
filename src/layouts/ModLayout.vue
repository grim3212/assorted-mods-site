<template>
  <div>
    <nav
      class="fixed z-50 w-full bg-gray-800 top-0 flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg"
    >
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <router-link
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-300"
            to="/"
            >Assorted Mods</router-link
          >
          <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            @click="toggleMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="fill-current w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div class="lg:flex flex-grow items-center" :class="menuOpened ? 'flex' : 'hidden'">
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-300 hover:text-gray-500"
                href="https://github.com/grim3212"
                ><svg
                  class="fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>GitHub</title>
                  <path
                    d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
                  ></path></svg
                ><span class="ml-2">GitHub</span></a
              >
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-300 hover:text-gray-500"
                href="https://twitter.com/grim3212"
                ><svg
                  class="fill-current w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Twitter</title>
                  <path
                    d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"
                  ></path></svg
                ><span class="ml-2">Twitter</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container mx-auto pt-12">
      <div class="flex flex-wrap">
        <div class="w-full sm:w-3/12 lg:w-2/12 pr-4 tex-left">
          <div class="block overflow-y-auto pt-8 pb-4">
            <div class="mb-6">
              <router-link
                class="text-gray-300 hover:text-gray-500 text-xs uppercase font-bold block py-1 px-4 no-underline"
                :to="{ name: 'DecorHome' }"
                >Assorted Decor</router-link
              >
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <router-link
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    :to="{ name: 'Colorizer' }"
                    >Colorizer</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    :to="{ name: 'Furniture' }"
                    >Furniture</router-link
                  >
                </li>
                <li>
                  <a
                    class="flex items-center text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    href="https://www.curseforge.com/minecraft/mc-mods/assorted-decor"
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="fill-current w-5 h-5 ml-2"
                    >
                      <path
                        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                      />
                      <path
                        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
          <div class="my-8">
            <router-view />
          </div>
        </div>
        <div class="w-full lg:w-2/12 px-4 hidden lg:block"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      menuOpened: false,
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened
    },
  },
})
</script>

<style lang="postcss">
.router-link-exact-active {
  @apply text-blue-600 border-l-2 border-solid border-blue-600 pl-1;
}
</style>
