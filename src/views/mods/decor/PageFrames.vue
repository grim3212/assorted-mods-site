<template>
  <div id="content">
    <h1><a name="frames">Frames</a></h1>
    <p>
      If you would also like to add depth to your house then frames are for you. Frames come in
      either wood or iron. Frames are stronger then wallpaper so if their supporting block is
      removed they will still be there. To dye a frame you just need to right click with a dye in
      your hand on them. To break frames use an axe for wooden and a pickaxe for the iron variant.
    </p>
    <img src="\mods\decor\wood_frame_recipe.png" />
    <img src="\mods\decor\iron_frame_recipe.png" />
    <p>
      Similar to
      <router-link class="text-blue-300" :to="{ name: 'Wallpaper' }">Wallpaper</router-link>, once
      placed keep right clicking for available patterns, it will automatically cycle through only
      those that fit the given area.
    </p>
    <img src="\mods\decor\frames.png" />
  </div>
</template>
