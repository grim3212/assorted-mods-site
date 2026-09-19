<template>
  <div id="content">
    <h1><a name="core_support">Core Support</a></h1>
    <p>
      Assorted Tools supports every material that
      <NuxtLink
        class="page-link"
        to="/core/materials"
      >
        Assorted Core
      </NuxtLink> adds as well as adding in Emerald
      tools and armor as well. If enabled Assorted Tools will create Pickaxes, Axes, Shovels, Hoes,
      Swords, Machetes, Hammers, MultiTools, Helmets, Chestplates, Leggings, Boots, Spears, Throwing Spears,
      Buckets, and Shears for each material.
    </p>
    <img src="\mods\tools\armors.png">
    <img src="\mods\tools\material_tab_example.png">
    <p>
      Each tool or armor can be repaired use the ingot or gem form of the material and is crafted
      the same way you craft vanilla tools and armor but replacing them for the material of your
      choice. Each tool and armor material is completely configurable if you would like to change
      the values.
    </p>
    <h2>Example recipes:</h2>
    <p>
      If you forgot what the recipes look like or maybe just want a refresher here you go. Replace
      the Topaz Gem with the material of your choice to craft any of the tools or armor.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedtools:topaz_pickaxe" />
      <Recipe id="assortedtools:topaz_axe" />
      <Recipe id="assortedtools:topaz_shovel" />
      <Recipe id="assortedtools:topaz_hoe" />
      <Recipe id="assortedtools:topaz_sword" />
      <Recipe id="assortedtools:topaz_machete" />
      <Recipe id="assortedtools:topaz_hammer" />
      <Recipe id="assortedtools:topaz_multitool" />
      <Recipe id="assortedtools:topaz_helmet" />
      <Recipe id="assortedtools:topaz_chestplate" />
      <Recipe id="assortedtools:topaz_leggings" />
      <Recipe id="assortedtools:topaz_boots" />
      <Recipe id="assortedtools:topaz_spear" />
      <Recipe id="assortedtools:topaz_throwing_spear" />
      <Recipe id="assortedtools:topaz_shears" />
      <Recipe id="assortedtools:topaz_bucket" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Core Support'
})
</script>
