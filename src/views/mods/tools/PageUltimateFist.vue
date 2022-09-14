<template>
  <div id="content">
    <h1><a name="ultimate_fist">Ultimate Fist</a></h1>
    <p>
      The Ultimate Fist is an overpowered tool left behind by an ancient civilization. The fragments
      of which can be found across all three dimensions and are required to be able to craft it.
    </p>
    <img src="\mods\tools\ultimate_fist_recipe.png" />

    <p>
      The Ultimate Fist by default is absurdly powerful and can break blocks extremely fast and one
      shot many mobs. All of the tools are configurable using the same configuration that is
      explained at
      <router-link :to="{ name: 'MaterialConfig' }" class="page-link">Material Config</router-link>.
      <br />
      <br />
      <b>Side note</b>: A number of the configuration values are unused since this does not have other
      tools/armor associated with it and it is not allowed to be enchanted.
    </p>
  </div>
</template>
