<template>
  <div id="content">
    <h1><a name="config">Material Configs</a></h1>
    <p>
      This will go over the two ways that <i>Assorted Tools</i> handles configurable
      <b>Armor Materials</b> and <b>Item Tiers</b>.
    </p>
    <h2><a name="armor">Armor Materials</a></h2>
    <p>
      You are able to configure the armor materials in <i>Assorted Tools</i>. The
      <NuxtLink class="page-link" to="/tools/chicken-suit">
        Chicken Suit
      </NuxtLink>
      is under <i>chicken_suit</i> and every
      <NuxtLink class="page-link" to="/core/materials">
        Assorted Core
      </NuxtLink>
      material is under <i>modded_armor_overrides</i>. Both live in the
      <i class="text-gray-600">assortedtools-common.toml</i> config file on NeoForge, or
      <i class="text-gray-600">assortedtools-common.json</i> on Fabric. Values are read once at
      startup, so changes need a restart.
    </p>
    <img src="\mods\tools\armor_config.png">
    <p>The following values can be configured:</p>
    <ul class="list-disc list-outer mx-6">
      <li>
        <i>durability</i> refers to how long the armor will last. This value is multiplied
        differently for each piece.
        <div class="mx-6">
          <ul class="list-square list-inside">
            <li>durability * 11 for the helmet</li>
            <li>durability * 16 for the chestplate</li>
            <li>durability * 15 for the leggings</li>
            <li>durability * 13 for the boots</li>
          </ul>
        </div>
      </li>
      <li>
        <i>helmetReductionAmount</i>, <i>chestPlateReductionAmount</i>,
        <i>leggingsReductionAmount</i>, and <i>bootsReductionAmount</i> refer to the number of armor
        points the player gets for wearing that piece.
      </li>
      <li>
        <i>enchantibility</i> refers to how enchantible the material is. The higher the number the
        better enchantments are likely to appear.
      </li>
      <li>
        <i>toughness</i> can be used to provide extra resistance to the power of strong attacks.
      </li>
      <li>
        <i>knockbackResistance</i> refers to how much resistance to getting knocked back from
        attacks on projectiles.
      </li>
    </ul>
    <h2><a name="tiers">Item Tiers</a></h2>
    <p>
      You are able to configure the tool materials used by every tool in <i>Assorted Tools</i>,
      including
      <NuxtLink class="page-link" to="/tools/hammers">
        Hammers
      </NuxtLink>,
      <NuxtLink class="page-link" to="/tools/multitools">
        MultiTools
      </NuxtLink>,
      <NuxtLink class="page-link" to="/tools/shears">
        Shears
      </NuxtLink>,
      <NuxtLink class="page-link" to="/tools/throwing-spears">
        Throwing Spears
      </NuxtLink>, and
      <NuxtLink class="page-link" to="/tools/buckets">
        Buckets
      </NuxtLink>.
    </p>
    <br>
    <p>
      There are three sections. <i>vanilla_tool_overrides</i> covers the vanilla materials,
      <i>modded_tool_overrides</i> covers every
      <NuxtLink class="page-link" to="/core/materials">
        Assorted Core
      </NuxtLink>
      material, and <i>ultimate_fist</i> covers the
      <NuxtLink class="page-link" to="/tools/ultimate-fist">
        Ultimate Fist
      </NuxtLink>. Vanilla tools are not affected, only the tools in <i>Assorted Tools</i>. The
      defaults match the original values. Values are read once at startup, so changes need a restart.
    </p>
    <img src="\mods\tools\tool_config.png">
    <p>The following values can be configured:</p>
    <ul class="list-disc list-outer mx-6">
      <li>
        <i>harvestLevel</i> for tools, refers to what blocks it can break. 0 is wood, 1 stone,
        2 iron, 3 diamond, 4 and above netherite.
      </li>
      <li><i>maxUses</i> refers to how many uses it has before it breaks.</li>
      <li><i>efficiency</i> for tools, refers to how quickly the material can break blocks.</li>
      <li><i>damage</i> refers to damage to entities.</li>
      <li>
        <i>enchantability</i> refers to how enchantible the material is. The higher the number the
        better enchantments are likely to appear.
      </li>
      <li><i>axeDamage</i> is the damage modifier for axes in each material.</li>
      <li><i>axeSpeed</i> is the speed modifier for axes in each material.</li>
      <li><i>maxBuckets</i> the maximum number of buckets that this materials bucket can hold.</li>
      <li>
        <i>milkingLevel</i> the milking level that will be set for this materials bucket. By default
        only 0-3. Being able to milk a sheep would be a level of 0, Sheep is 1, and Pig is 2.
      </li>
      <li><i>maxPickupTemp</i> the maximum temp of a fluid this materials bucket can pickup.</li>
      <li>
        <i>breaksAfterUse</i> is this material so weak that the bucket will break after placing a
        fluid.
      </li>
      <li>
        <i>multiToolModifier</i> is multiplied by <i>maxUses</i> to give the MultiTool its
        durability.
      </li>
    </ul>
    <p>
      Materials under <i>modded_tool_overrides</i> also have a <i>spear</i> group with the nine
      values Minecraft tunes per spear material: <i>swingSeconds</i>, <i>damageMultiplier</i>,
      <i>delaySeconds</i>, <i>dismountSeconds</i>, <i>dismountSpeed</i>, <i>knockbackSeconds</i>,
      <i>knockbackSpeed</i>, <i>damageSeconds</i>, and <i>damageSpeed</i>.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Material Config'
})
</script>
