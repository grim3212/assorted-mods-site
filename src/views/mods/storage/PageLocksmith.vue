<template>
  <div id="content">
    <h1><a name="locksmith">Locksmith</a></h1>
    <p>
      Almost all the blocks within <i>Assorted Storage</i> can be locked and then opened with the
      correct key. Using the locksmith workbench you are able to set a code on locks and keys to
      restrict access to only those that have a key of the same code.
    </p>
    <h2><a name="workbench">Locksmith Workbench</a></h2>
    <img src="\mods\storage\locksmith_workbench_recipe.png" />
    <p>
      Using this workbench will allow you to define a code for keys and locks. As long as the lock
      and key code are the same you will be able to open blocks.
    </p>
    <img src="\mods\storage\locksmith_workbench.png" />
    <h2><a name="lock">Locksmith Lock</a></h2>
    <p>
      Once a code has been set on a lock simply right click a supported storage block to lock it and
      restrict access to it.
    </p>
    <img src="\mods\storage\lock_recipe.png" />
    <h2><a name="key">Locksmith Key</a></h2>
    <p>
      You just need to have this key somewhere within your inventory and you will be able to open
      storage blocks that are locked with its code.
    </p>
    <img src="\mods\storage\key_recipe.png" />
    <h2><a name="key_ring">Key Ring</a></h2>
    <p>
      If you have a ton of spare keys lying around taking up your inventory there is a simple
      solution the <b>Key Ring</b>. This neat item allows you to store up to 12 seperate keys in one
      item and will allow you to unlock any block just the same as if you had each key seperate.
    </p>
    <img src="\mods\storage\key_ring_recipe.png" />
    <p>
      To use it just right click it in your inventory and a GUI will open. Drag any keys you would
      like to store over and then you are good to go. It only supports 1 key in each slot.
    </p>
    <img src="\mods\storage\key_ring_gui.png" />

    <h2><a name="doors">Locking Doors</a></h2>
    <p>
      Using the <i>Locksmith Lock</i> you are also able to lock all of the Vanilla doors so that you
      require the correct key with the correct combination to open them.
      <u>If they are locked they will no longer be able to be activated by redstone.</u>
      If you have
      <router-link
         class="page-link"
        :to="{ name: 'ExtraDecor' }"
        >Assorted Decor</router-link
      >
      installed you will also be able to lock the <i>Quartz Door</i>.
    </p>
    <img src="\mods\storage\locked_doors.png" />
    <p>
      To lock the Iron and Quartz doors you can either right click with a <i>Locksmith Lock</i> that
      has a combination or shift-right click.
      <b>To lock all of the wooden doors you will need to shift-right click</b>.
    </p>
    <br />
    <p>
      To remove the lock from a door shift-right click on the locked door with an empty hand. Make
      sure yo have a key in your inventory with the combination.
    </p>
  </div>
</template>
