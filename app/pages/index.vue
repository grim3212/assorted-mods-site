<template>
  <section class="text-gray-200">
    <div class="max-w-6xl mx-auto px-5 py-24">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1
          class="title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"
        >
          ASSORTED MODS
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          Different assortments of related additions to Minecraft.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <ModCard mod="core" />
        <ModCard mod="decor" />
        <ModCard mod="storage" />
        <ModCard mod="tech" />
        <ModCard mod="tools" />
        <ModCard mod="world" />
      </div>
    </div>
  </section>
</template>
