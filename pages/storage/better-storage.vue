<template>
  <div id="content">
    <h1><a name="better_storage">Better Storage</a></h1>
    <p>
      A number of vanilla blocks have been brought to Assorted Storage and provide more storage the
      higher the storage level of the material they are crafted with is. Every block can be crafted
      with any of the
      <NuxtLink class="page-link" to="/core/materials">
        materials
      </NuxtLink> from
      <NuxtLink class="page-link" to="/core">
        Assorted Core
      </NuxtLink>. In
      addition every block added can also be locked using the
      <NuxtLink class="page-link" to="/storage/locksmith">
        Locksmith Tools
      </NuxtLink>.
    </p>
    <img src="\mods\storage\better_storage.png">

    <p>
      The current supported blocks that have been brought into Assorted Storage are the following:
    </p>
    <ul class="list-disc list-inside">
      <li>Chests</li>
      <li>Barrels</li>
      <li>Shulker Boxes</li>
      <li>Hoppers</li>
    </ul>

    <h2><a name="upgrading">Upgrading</a></h2>
    <p>
      All of the blocks follow the exact same pattern when it comes to upgrading them to newer
      materials. You have two options to do it. You can have the previous storage level item in your
      inventory and surround it with a material of the next tier. Or you can build and use on of the
      upgrades below.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\storage\iron_chest_recipe.png">
      <img src="\mods\storage\iron_barrel_recipe.png">
      <img src="\mods\storage\iron_shulker_recipe.png">
      <img src="\mods\storage\iron_hopper_recipe.png">
    </div>

    <h2><a name="upgrades">Upgrades</a></h2>
    <p>
      These upgrades provide an easy way to upgrade your storage blocks without needing to break
      them. This way your items can stay inside them. All of these storage blocks work by
      <b>shift-right clicking</b> on the block you want to upgrade. These will only allow you to
      move up one level. You can't skip storage levels with the upgrades 😅.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\storage\blank_upgrade_recipe.png">
      <img src="\mods\storage\iron_upgrade_recipe.png">
    </div>

    <p>
      All blocks and items added here will have a line on their tooltip indicating what their
      Storage Level is to make it a bit easier to know what the next one in line is. Currently the
      storage levels range from <b>0 - 5</b>. A normal vanilla block being a <b>0</b> and a
      Netherite block being a level <b>5</b>.
    </p>
    <img src="\mods\storage\storage_level_tooltip.png">

    <h2><a name="hoppers">Hoppers</a></h2>
    <p>
      Hoppers are unique amongst the new blocks as there is new functionality added. This will allow
      locked hoppers to pull and push to Locked Storages whereas without it is not possible for
      connected storages to get items in and out. Locking a hopper with the correct lock that
      matches the pull/push block will let it be able to access it.
    </p>
    <p>
      One other thing with hoppers is that the higher storage level the hopper is made out of the
      faster it is.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Better Storage'
})
</script>
