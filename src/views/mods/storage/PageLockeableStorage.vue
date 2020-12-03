<template>
  <div id="content">
    <h1><a name="lockeable_storage">Lockeable Storage</a></h1>
    <p>
      All the blocks on this page are able to be locked using the
      <router-link
        class="font-bold underline text-gray-500 hover:text-black visited:text-purple-600"
        :to="{ name: 'Locksmith' }"
        >Locksmith tools</router-link
      >. All of these blocks also support hoppers and pipes to insert and export items.
    </p>
    <h2><a name="crates">Warehouse Crates</a></h2>
    <p>
      Warehouse crates are simple storage blocks that have 27 slots for items. There are variants
      for each vanilla wood type.
    </p>

    <div class="grid grid-cols-3 gap-4">
      <img src="\mods\storage\oak_crate_recipe.png" />
      <img src="\mods\storage\birch_crate_recipe.png" />
      <img src="\mods\storage\spruce_crate_recipe.png" />
      <img src="\mods\storage\jungle_crate_recipe.png" />
      <img src="\mods\storage\acacia_crate_recipe.png" />
      <img src="\mods\storage\dark_oak_crate_recipe.png" />
      <img src="\mods\storage\warped_crate_recipe.png" />
      <img src="\mods\storage\crimson_crate_recipe.png" />
    </div>

    <h2><a name="obsidian_safe">Obsidian Safe</a></h2>
    <p>The obsidian safe is resitant to explosions and has 27 slots for storage.</p>
    <img src="\mods\storage\obsidian_safe_recipe.png" />

    <h2><a name="gold_safe">Gold Safe</a></h2>
    <p>
      The gold safe works just like Shulker boxes where when you break it, it will keeps its
      inventory. Once placed again the invetory will still remain when you open it up. The gold safe
      is an upgrade to the Obsidian Safe so is just as strong as well as has 36 slots instead of 27.
    </p>
    <img src="\mods\storage\gold_safe_recipe.png" />

    <h2><a name="cabinets">Cabinets</a></h2>
    <p>
      Cabinets are similar to the warehouse crates where they store a single chests worth of items
      and can be locked but they come in two varieties and open from the front instead of the top.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\storage\wood_cabinet_recipe.png" />
      <img src="\mods\storage\glass_cabinet_recipe.png" />
    </div>

    <h2><a name="lockers">Lockers</a></h2>
    <p>
      Lockers can be placed either one or two high. When placed two high you can access twice the
      items. Similar to a double chest but on it's side. The inventory for the locker scrolls and
      you can use the right side buttons to navigate as well.
    </p>
    <img src="\mods\storage\locker_recipe.png" />
    <img src="\mods\storage\locker.png" />
  </div>
</template>
