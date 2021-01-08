<template>
  <div id="content">
    <h1><a name="extra">Extra Decor</a></h1>
    <p>
      This is where additions don't really fit into their own page as they act similarly or the same
      as a vanilla block already.
    </p>
    <h2><a name="quartz_door">Quartz Door</a></h2>
    <p>
      The <i>Quartz Door</i> is just a brand new door that functions identically to the Iron Door
      but instead is made with Quartz.
    </p>
    <img src="\mods\decor\quartz_door_recipe.png" />
    <p>
      The <i>Quartz Door</i> can be locked like the Vanilla Doors if you have
      <router-link
        class="font-bold underline text-gray-500 hover:text-black visited:text-purple-600"
        :to="{ name: 'Locksmith' }"
        >Assorted Storage</router-link
      >
      installed.
    </p>
  </div>
</template>
