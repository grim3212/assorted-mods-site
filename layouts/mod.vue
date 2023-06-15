<template>
  <div>
    <nav
      class="
          fixed
          z-50
          w-full
          bg-gray-800
          top-0
          flex flex-wrap
          items-center
          justify-between
          px-2
          py-3
          navbar-expand-lg
          shadow-lg
        "
    >
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <NuxtLink
            class="
                text-sm
                font-bold
                leading-relaxed
                inline-block
                mr-4
                py-2
                whitespace-no-wrap
                uppercase
                text-gray-300
              "
            to="/"
          >
            Assorted Mods
          </NuxtLink>
          <button
            class="
                cursor-pointer
                text-xl
                leading-none
                px-3
                py-1
                border border-solid border-transparent
                rounded
                bg-transparent
                block
                lg:hidden
                outline-none
                focus:outline-none
              "
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
                class="
                    px-3
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-bold
                    text-gray-300
                    hover:text-gray-500
                  "
                href="https://github.com/grim3212"
              ><svg
                class="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>GitHub</title>
                <path
                  d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"
                /></svg><span class="ml-2">GitHub</span></a>
            </li>
            <li class="nav-item">
              <a
                class="
                    px-3
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-bold
                    text-gray-300
                    hover:text-gray-500
                  "
                href="https://twitter.com/grim3212"
              ><svg
                class="fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Twitter</title>
                <path
                  d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"
                /></svg><span class="ml-2">Twitter</span></a>
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
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                to="/core"
              >
                Assorted Core
              </NuxtLink>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/core/machines"
                  >
                    Machines
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/core/materials"
                  >
                    Materials
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://www.curseforge.com/minecraft/mc-mods/assorted-core"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #FF6B00"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from CurseForge</title>
                      <path
                        d="M6.307 5.581l.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 00-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"
                      />
                    </svg>
                    CurseForge
                  </a>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://modrinth.com/mod/assorted-core"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #00af5c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from Modrinth</title>
                      <path
                        d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"
                      />
                    </svg>
                    Modrinth
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                to="/decor"
              >
                Assorted Decor
              </NuxtLink>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/colorizer"
                  >
                    Colorizer
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/furniture"
                  >
                    Furniture
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/slopes"
                  >
                    Slopes
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/fireplaces"
                  >
                    Fireplaces
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/planter"
                  >
                    Planter Pot
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/wallpaper"
                  >
                    Wallpaper
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/frames"
                  >
                    Frames
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/neon-sign"
                  >
                    Neon Sign
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/hangeables"
                  >
                    Hangeables
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/fluro"
                  >
                    Fluro
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/roadways"
                  >
                    Roadways
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/painting"
                  >
                    Painting
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/decorations"
                  >
                    Decorations
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/cage"
                  >
                    Cage
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/decor/extras"
                  >
                    Extras
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://www.curseforge.com/minecraft/mc-mods/assorted-decor"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #FF6B00"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from CurseForge</title>
                      <path
                        d="M6.307 5.581l.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 00-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"
                      />
                    </svg>
                    CurseForge
                  </a>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://modrinth.com/mod/assorted-decor"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #00af5c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from Modrinth</title>
                      <path
                        d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"
                      />
                    </svg>
                    Modrinth
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                to="/tools"
              >
                Assorted Tools
              </NuxtLink>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/pokeball"
                  >
                    Pokeball
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/wands"
                  >
                    Wands
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/spears"
                  >
                    Spears
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/chicken-suit"
                  >
                    Chicken Suit
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/boomerang"
                  >
                    Boomerangs
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/hammers"
                  >
                    Hammers
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/shears"
                  >
                    Shears
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/buckets"
                  >
                    Buckets
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/ultimate-fist"
                  >
                    Ultimate Fist
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/multitools"
                  >
                    MultiTools
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/core-support"
                  >
                    Core Support
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tools/material-config"
                  >
                    Material Config
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://www.curseforge.com/minecraft/mc-mods/assorted-tools"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #FF6B00"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from CurseForge</title>
                      <path
                        d="M6.307 5.581l.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 00-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"
                      />
                    </svg>
                    CurseForge
                  </a>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://modrinth.com/mod/assorted-tools"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #00af5c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from Modrinth</title>
                      <path
                        d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"
                      />
                    </svg>
                    Modrinth
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                to="/storage"
              >
                Assorted Storage
              </NuxtLink>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/storage/locksmith"
                  >
                    Locksmith
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/storage/storage-crates"
                  >
                    Storage Crates
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/storage/better-storage"
                  >
                    Better Storage
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/storage/bags"
                  >
                    Bags
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/storage/enderchest"
                  >
                    Locked Ender Chest
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/storage/lockeable"
                  >
                    Lockeable Storage
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/storage/item-tower"
                  >
                    Item Tower
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://www.curseforge.com/minecraft/mc-mods/assorted-storage"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #FF6B00"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from CurseForge</title>
                      <path
                        d="M6.307 5.581l.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 00-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"
                      />
                    </svg>
                    CurseForge
                  </a>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://modrinth.com/mod/assorted-storage"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #00af5c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from Modrinth</title>
                      <path
                        d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"
                      />
                    </svg>
                    Modrinth
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                to="/tech"
              >
                Assorted Tech
              </NuxtLink>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tech/fans"
                  >
                    Fans
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tech/sensors"
                  >
                    Sensors
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tech/spikes"
                  >
                    Spikes
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tech/bridges"
                  >
                    Bridges
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tech/gravity"
                  >
                    Gravity
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tech/alarm"
                  >
                    Alarm
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/tech/torches"
                  >
                    Torches
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://www.curseforge.com/minecraft/mc-mods/assorted-tech"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #FF6B00"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from CurseForge</title>
                      <path
                        d="M6.307 5.581l.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 00-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"
                      />
                    </svg>
                    CurseForge
                  </a>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://modrinth.com/mod/assorted-tech"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #00af5c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from Modrinth</title>
                      <path
                        d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"
                      />
                    </svg>
                    Modrinth
                  </a>
                </li>
              </ul>
            </div>
            <div class="mb-6">
              <NuxtLink
                class="
                    text-gray-300
                    hover:text-gray-500
                    text-xs
                    uppercase
                    font-bold
                    block
                    py-1
                    px-4
                    no-underline
                    toplevel-route
                  "
                to="/world"
              >
                Assorted World
              </NuxtLink>
              <ul class="block flex-wrap list-none pl-0 mb-0 mt-0">
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/world/randomite"
                  >
                    Randomite
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    class="text-gray-300 hover:text-gray-500 text-sm block mb-2 mx-4 no-underline"
                    to="/world/ruins"
                  >
                    Ruins
                  </NuxtLink>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://www.curseforge.com/minecraft/mc-mods/assorted-world"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #FF6B00"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from CurseForge</title>
                      <path
                        d="M6.307 5.581l.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 00-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"
                      />
                    </svg>
                    CurseForge
                  </a>
                </li>
                <li>
                  <a
                    class="flex
                        items-center
                        text-indigo-500
                        hover:text-indigo-800
                        text-sm
                        mb-2
                        mx-4
                        no-underline"
                    href="https://modrinth.com/mod/assorted-world"
                    target="_default"
                  >
                    <svg
                      class="fill-current h-5 w-5 mr-1"
                      style="color: #00af5c"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Download from Modrinth</title>
                      <path
                        d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73 11 10.999 0 0 0-2.17 3.11 11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02.2-.04.22.1-.26-1.7l-.36-1.37-1.01-.06a8.5 8.489 0 0 1-5.18-1.8 5.34 5.34 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97 2.07-.43 2.06-.43 1.47-1.47c.8-.8 1.48-1.5 1.48-1.52 0-.09-.42-1.63-.46-1.7-.04-.06-.2-.03-1.02.18-.53.13-1.2.3-1.45.4l-.48.15-.53.53-.53.53-.93.1-.93.07-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6.43-.57c.68-.9.68-.9 1.46-1.1.4-.1.65-.2.83-.33.13-.099.65-.579 1.14-1.069l.9-.9-.7-.7-.7-.7-1.95.54c-1.07.3-1.96.53-1.97.53-.03 0-2.23 2.48-2.63 2.97l-.29.35.28 1.03c.16.56.3 1.16.31 1.34l.03.3-.34.23c-.37.23-2.22 1.3-2.84 1.63-.36.2-.37.2-.44.1-.08-.1-.23-.6-.32-1.03-.18-.86-.17-2.75.02-3.73a8.84 8.839 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1.06-.17.5-2.999.47-3.039-.01-.02-.1-.02-.2-.03Zm3.68.67c-.2 0-.3.1-.37.38-.06.23-.46 2.42-.46 2.52 0 .04.1.11.22.16a8.51 8.499 0 0 1 2.99 2 8.38 8.379 0 0 1 2.16 3.449 6.9 6.9 0 0 1 .4 2.8c0 1.07 0 1.27-.1 1.73a9.37 9.369 0 0 1-1.76 3.769c-.32.4-.98 1.06-1.37 1.38-.38.32-1.54 1.1-1.7 1.14-.1.03-.1.06-.07.26.03.18.64 2.56.7 2.78l.06.06a12.07 12.058 0 0 0 7.27-9.4c.13-.77.13-2.58 0-3.4a11.96 11.948 0 0 0-5.73-8.578c-.7-.42-2.05-1.06-2.25-1.06Z"
                      />
                    </svg>
                    Modrinth
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-9/12 lg:w-8/12 px-4 sm:pr-10 lg:pr-4">
          <div class="my-8">
            <slot />
          </div>
        </div>
        <div class="w-full lg:w-2/12 px-4 hidden lg:block" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpened = ref(false)

function toggleMenu() {
  menuOpened.value = !menuOpened.value
}
</script>

<style lang="postcss">
.router-link-exact-active:not(.toplevel-route) {
    @apply text-blue-600 border-l-2 border-solid border-blue-600 pl-1;
}
.toplevel-route.router-link-exact-active {
    @apply text-blue-600;
}
#content h1 {
  @apply text-gray-200 text-3xl py-2;
}
#content h2 {
  @apply text-gray-200 text-2xl py-2;
}
#content img {
  @apply mx-auto rounded-lg my-2;
}
#content {
  @apply text-gray-400;
}
#content .muted {
  @apply text-gray-600;
}
#content a:not(.page-link):not(.changelog) {
  @apply text-blue-600 border-l-2 border-solid border-blue-600 pl-1;
}
#content a.page-link {
  @apply text-blue-600;
  &:hover {
    @apply text-blue-400;
  }
  &:visited {
    @apply text-purple-600;
  }
}
</style>
