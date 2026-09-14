<template>
  <div id="content">
    <h1><a name="chicken_suit">Chicken Suit</a></h1>
    <p>
      The Chicken Suit is a unique armor set. With every piece of the suit you get an extra jump.
      With these you can 'fly' around as good as a chicken and get the chicken glide effect rather
      than falling to your death.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedtools:chicken_suit_helmet" />
      <Recipe id="assortedtools:chicken_suit_chestplate" />
      <Recipe id="assortedtools:chicken_suit_leggings" />
      <Recipe id="assortedtools:chicken_suit_boots" />
    </div>
    <h2><a name="enchantment">Chicken Jump Enchantment</a></h2>
    <p>
      There is also a new Chicken Jump enchantment that allows other armor sets to gain the unique
      ability that the Chicken Suit had. You can get it from enchanting or finding an enchantment
      book. Or using your already made <i>Chicken Suit</i> and combining it with another piece of
      armor of the same type.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <img src="\mods\tools\chicken_jump_enchantment_book.png">
      <img src="\mods\tools\chicken_jump_enchantment_armor.png">
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Chicken Suit'
})
</script>
