<template>
  <div id="content">
    <h1><a name="storage_crates">Storage Crates</a></h1>
    <p>
      If you have ever used any barrel or drawer mod this will be very familiar. These allow you to
      store many stacks of the same item and you are able to add and remove items from it all
      without needing to go into the GUI. In addition every block added can also be locked using the
      <NuxtLink class="page-link" to="/storage/locksmith">
        Locksmith Tools
      </NuxtLink>.
    </p>
    <img src="\mods\storage\storage_crates.png">

    <h2><a name="crates">Crates</a></h2>
    <p>
      You are able to create Storage Crates from every type of Wood that vanilla Minecraft supports.
    </p>
    <p>
      There are 4 different basic Storage Crates that you are able to make each has a different
      number of slots for items. Single, Double, Triple, and Quadruple slot variants.
    </p>
    <div class="grid grid-cols-2 gap-4">
      <img src="\mods\storage\single_crate_recipe.png">
      <img src="\mods\storage\double_crate_recipe.png">
      <img src="\mods\storage\triple_crate_recipe.png">
      <img src="\mods\storage\quadruple_crate_recipe.png">
    </div>

    <h3><a name="interacting">Interacting</a></h3>
    <p>
      There are a number of different ways you can interact with crates to add and remove items from
      them.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <strong>Right Click</strong> - Try and add the stack in your hand to the slot you were
        hovering over
      </li>
      <li>
        <strong>Double - Right Click</strong> - Will look for the same type of items that your first
        click contained and try to add them all
      </li>
      <li>
        <strong>Left Click</strong> - Will drop a single item of the item you were hovering over
      </li>
      <li>
        <strong>Shift Left Click</strong> - Will drop a full stack of the item you were hovering
        over
      </li>
      <li>
        <strong>Shift Right Click</strong> - Will open an interface that you can add upgrades and
        see the items in the crate
      </li>
    </ul>

    <h2><a name="compacting">Compacting</a></h2>
    <p>
      A Compacting Storage Crate will allow the automatic conversion of certain recipes that have
      different compact representations. For example Iron has 3 states in vanilla. Iron Block ->
      Iron Ingots -> Iron Nuggets. The Compacting Storage Crate will allow you to input any of these
      into it and if you need one of them you can get that form out automatically.
    </p>
    <br>
    <p>
      The crate only supports up to 3 levels. As such the recipe requires any
      <strong>Triple</strong> slot Storage Crate
    </p>
    <img src="\mods\storage\compacting_crate_recipe.png">

    <h2><a name="controller">Controller</a></h2>
    <p>
      If you would like to be manage a lot of Storage Crates at once you can use a Storage Crate
      Controller. This block allows for you to pipe items in or pipe items out as well as allows for
      you to interact with it to add items to your storage system.
    </p>
    <p>
      Storage Crates will automatically be connected to the controller as long as their is a direct
      connection of Crates back to the Controller.
    </p>
    <img src="\mods\storage\crate_controller_recipe.png">

    <h3><a name="bridge">Bridge</a></h3>
    <p>
      If you would like to connect some Storage Crates to your controller that do not have a direct
      connection you can join them using the Storage Bridge to "bridge" the gap and have those
      Storage Crates still connected.
    </p>
    <img src="\mods\storage\crate_bridge_recipe.png">

    <h2><a name="upgrades">Upgrades</a></h2>
    <p>
      There are 4 Storage Crate specific upgrades that you can craft and add to your Storage Crates
      as well as each of the Level Upgrades from
      <NuxtLink
        class="page-link"
        to="/storage/better-storage#upgrades"
      >
        Better Storage
      </NuxtLink>. You add these Upgrades either by Right-Clicking on a Storage Crate with them or by opening
      the interface of a Storage Crate and adding them within.
    </p>
    <img src="\mods\storage\crate_interface.png">

    <h3><a name="item_locking">Item Locking</a></h3>
    <p>
      Within the Storage Crate interface you can click the checkbox for a specific slot to lock the
      item in it. So even if you run out new items will not be able to take it's place.
      <i>For Compacting Crates the checkbox is for the whole Crate rather than just one slot</i>.
    </p>
    <br>

    <h3><a name="void_upgrade">Void Upgrade</a></h3>
    <p>
      The Void Upgrade will allow you to still be able to input new items in the Storage Crate but
      each one past the maximum will get "voided" and you will not be able to recover them.
    </p>
    <img src="\mods\storage\void_upgrade_recipe.png">

    <h3><a name="redstone_upgrade">Redstone Upgrade</a></h3>
    <p>
      The Redstone Upgrade will make the Storage Crate emit a redstone signal if certain conditions
      are met. You can cycle modes by right clicking the air with the Redstone Upgrade in your hand.
      The different modes are shown below. Each will be a percentage that will decide the resulting
      Redstone power level.
    </p>
    <ul class="list-disc list-inside">
      <li>
        <strong>All Slots</strong> - The different between all of the slots combined max storage and
        the current amount stored in them all
      </li>
      <li>
        <strong>Most Full Slot</strong> - The different between the slot with the most items max
        storage and current amount stored in that slot
      </li>
      <li>
        <strong>Least Full Slot</strong> - The different between the slot with the least items max
        storage and current amount stored in that slot
      </li>
      <li>
        <strong>Slot {0,1,2,3}</strong> - The different between the slot that is specified's max
        storage and current amount stored in that slot
      </li>
    </ul>
    <img src="\mods\storage\redstone_upgrade_recipe.png">

    <h3><a name="amount_upgrade">Amount Upgrade</a></h3>
    <p>
      The Amount Upgrade will let you see the number of items that are currently in each slot. It
      has two modes, <strong>Simple</strong> will show only the amount in each slot
      <strong>Full</strong> will show the amount out of the total allowed in that slot.
    </p>
    <img src="\mods\storage\amount_upgrade_recipe.png">
    <img src="\mods\storage\amount_upgrade.png">

    <h3><a name="glow_upgrade">Glow Upgrade</a></h3>
    <p>
      The Glow Upgrade will light the items stored in the slots when it is dark so that it is a bit
      easier to see what is stored in each Crate.
    </p>
    <img src="\mods\storage\glow_upgrade_recipe.png">
    <img src="\mods\storage\glow_upgrade.png">

    <h3><a name="level_upgrades">Level Upgrades</a></h3>
    <p>
      As mentioned previously Storage Crates support installing Level Upgrades from
      <NuxtLink
        class="page-link"
        to="/storage/better-storage#upgrades"
      >
        Better Storage
      </NuxtLink>. These Level Upgrades will provide a boost to the amount you can store in each slot. Each
      Level Upgrade has an associated multiplier which you can see within the Storage Crate
      interface. Each Level Upgrade you add multiplies it's multiplier by whatever the base stack
      size was and adds it.
    </p>
    <img src="\mods\storage\crate_interface_level.png">

    <h3><a name="locking">Locking</a></h3>
    <p>
      You are able to lock Storage Controllers, Storage Crates, and Compacting Storage Crates using
      the
      <NuxtLink class="page-link" to="/storage/locksmith">
        Locksmith Tools
      </NuxtLink>.
      These will allow you to restrict access to your crates and storage crate system.
      <i>Make sure to use a locked hopper if you still want to pipe items in</i>.
    </p>

    <h2><a name="rotator_majig">Rotator Majig</a></h2>
    <p>
      Another new item added is a Rotator Majig which will allow you to rotate blocks assuming they
      allow it. But you are also able to rotate the items in each slot of a Storage Crate. Maybe you
      want to place a crate on the ceiling this will allow for easier visibility.
    </p>
    <img src="\mods\storage\rotator_majig_recipe.png">
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Storage | Storage Crates'
})
</script>
