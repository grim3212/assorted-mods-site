<template>
  <div id="content">
    <h1><a name="wallpaper">Wallpaper</a></h1>
    <p>
      Are your walls lacking substance? Maybe they need some wallpaper. Wallpaper gives you many
      options to decorate your home with. By default you have 24 different designs. Other than just
      the default wallpaper you can also dye them by right clicking on a placed wallpaper with dye,
      if you would like to clear the wallpaper use Bonemeal. These support
      <NuxtLink class="page-link" to="/decor/painting">
        Paint Rollers
      </NuxtLink> to dye
      them. If your house even catches on fire remember that you can remove the burned look from
      wallpaper.
    </p>
    <img src="\mods\decor\wallpaper_recipe.png">
    <p>
      Once placed right click on it again and it will cycle through the available options. When
      placed next to other wallpaper it will try and take on the texture of the surrounding
      wallpaper.
    </p>
    <img src="\mods\decor\wallpaper.png">
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Wallpaper'
})
</script>
