<template>
  <div id="content">
    <h1><a name="lockeable_storage">Lockeable Storage</a></h1>
    <p>
      All the blocks on this page are able to be locked using the
      <NuxtLink
        class="page-link"
        to="/storage/locksmith"
      >
        Locksmith tools
      </NuxtLink>. All of these blocks also support hoppers and pipes to insert and export items.
    </p>
    <h2><a name="crates">Warehouse Crates</a></h2>
    <p>
      Warehouse crates are simple storage blocks that have 27 slots for items. There is one for each
      of the 12 vanilla wood types, and each takes any log of its own wood.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assortedstorage:oak_warehouse_crate" />
      <Recipe id="assortedstorage:birch_warehouse_crate" />
      <Recipe id="assortedstorage:spruce_warehouse_crate" />
      <Recipe id="assortedstorage:jungle_warehouse_crate" />
      <Recipe id="assortedstorage:acacia_warehouse_crate" />
      <Recipe id="assortedstorage:dark_oak_warehouse_crate" />
      <Recipe id="assortedstorage:warped_warehouse_crate" />
      <Recipe id="assortedstorage:crimson_warehouse_crate" />
      <Recipe id="assortedstorage:mangrove_warehouse_crate" />
      <Recipe id="assortedstorage:cherry_warehouse_crate" />
      <Recipe id="assortedstorage:bamboo_warehouse_crate" />
      <Recipe id="assortedstorage:pale_oak_warehouse_crate" />
    </div>

    <h2><a name="obsidian_safe">Obsidian Safe</a></h2>
    <p>The obsidian safe is resitant to explosions and has 27 slots for storage.</p>
    <Recipe id="assortedstorage:obsidian_safe" />

    <h2><a name="gold_safe">Gold Safe</a></h2>
    <p>
      The gold safe works just like Shulker boxes where when you break it, it will keeps its
      inventory. Once placed again the invetory will still remain when you open it up. The gold safe
      is an upgrade to the Obsidian Safe so is just as strong as well as has 36 slots instead of 27.
    </p>
    <Recipe id="assortedstorage:gold_safe" />

    <h2><a name="cabinets">Cabinets</a></h2>
    <p>
      Cabinets are similar to the warehouse crates where they store a single chests worth of items
      and can be locked but they come in two varieties and open from the front instead of the top.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assortedstorage:wood_cabinet" />
      <Recipe id="assortedstorage:glass_cabinet" />
    </div>

    <h2><a name="lockers">Lockers</a></h2>
    <p>
      Lockers can be placed either one or two high. When placed two high you can access twice the
      items. Similar to a double chest but on it's side. The inventory for the locker scrolls and
      you can use the right side buttons to navigate as well.
    </p>
    <Recipe id="assortedstorage:locker" />
    <img src="\mods\storage\locker.png">
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Lockeable Storage'
})
</script>
