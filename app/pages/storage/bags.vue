<template>
  <div id="content">
    <h1><a name="bags">Bags</a></h1>
    <p>
      Bags are a super convenient way for storing items on the go. Think of them as a Shulker Box
      that you do not need to place to open and access the inventory. You are able to craft a Bag
      from any of the
      <NuxtLink
        class="page-link"
        to="/core/materials"
      >
        materials
      </NuxtLink> from
      <NuxtLink
        class="page-link"
        to="/core"
      >
        Assorted Core
      </NuxtLink>. In
      addition the Bags can all be locked using the
      <NuxtLink
        class="page-link"
        to="/storage/locksmith"
      >
        Locksmith Tools
      </NuxtLink>.
    </p>
    <img src="\mods\storage\bags.png">

    <h2><a name="crafting">Crafting</a></h2>
    <p>
      To start off you will need to craft a basic bag which has the same inventory space as a normal
      chest.
    </p>
    <Recipe id="assortedstorage:bag" />

    <p>
      You are also able to upgrade that bag to the next Storage Level or craft a material bag
      directly using a chest made out of the material you would like.
    </p>

    <div class="flex flex-wrap gap-4">
      <Recipe id="assortedstorage:bag_iron" />
      <Recipe id="assortedstorage:bag_iron_chest" />
    </div>

    <h2><a name="dyeing">Dyeing</a></h2>
    <p>
      You are able to change the primary and secondary colors of all the different bags using dye in
      an inventory. In the same column or to the right of the bag in a crafting table would be the
      primary color. The column to the left of the bag will be the secondary color. You can dye
      material based bags as well.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedstorage:bag_coloring" />
    </div>

    <h2><a name="locking">Locking</a></h2>
    <p>
      Locking the bags is a bit different than other Storage options in <b>Assorted Storage</b>. You
      lock it via the bags inventory. There is a new slot off to the right for place a padlock with
      a lock set. Once locked you will need to have a key on you with that code in the future or you
      will not be able to unlock or open the bag.
    </p>
    <p>
      Unlike other Storage items the tooltip will not show what the lock code is just that it is
      locked. And the bag's texture will have a little lock icon.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <img src="\mods\storage\bag_inventory.png">
      <img src="\mods\storage\bag_tooltip.png">
    </div>

    <h2><a name="ender_bag">Ender Bag</a></h2>
    <p>
      The Ender Bag is a useful bag that allows you to access the Vanilla Ender Chests inventory or
      any of the
      <NuxtLink
        class="page-link"
        to="/storage/enderchest"
      >
        Locked Ender Chest
      </NuxtLink>
      inventories. Once locked you will need to <b>re-open</b> the Bag and it will then display the
      Locked Ender Chest tied to that code. If you want to go back to the Vanilla Ender Chest just
      take the lock out and <b>re-open</b> again.
    </p>
    <Recipe id="assortedstorage:ender_bag" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Bags'
})
</script>
