<template>
  <div id="content">
    <h1><a name="config">Material Configs</a></h1>
    <p>
      This will go over the two ways that <i>Assorted Tools</i> handles configurable
      <b>Armor Materials</b> and <b>Item Tiers</b>.
    </p>
    <h2><a name="armor">Armor Materials</a></h2>
    <p>
      You are able to configure the armor materials in <i>Assorted Tools</i> though it is only the
      <router-link class="page-link" :to="{ name: 'ChickenSuit' }">Chicken Suit</router-link>. These
      armor configurations can be found under the armor section in the
      <i class="text-gray-600">assortedtools-common.toml</i> config file.
    </p>
    <img src="\mods\tools\armor_config.png" />
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
        <i>reductionAmounts</i> refers to the number of armor points the player gets for wearing
        each piece of armor. Follows the same pattern of first helmet, then chestplate, leggings,
        and finally boots.
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
      You are able to configure the tool materials used in <i>Assorted Tools</i> currently used by
      <router-link class="page-link" :to="{ name: 'Hammers' }">Hammers</router-link>
      and
      <router-link class="page-link" :to="{ name: 'MultiTools' }">MultiTools</router-link>
      and
      <router-link class="page-link" :to="{ name: 'Shears' }">Shears</router-link>
      and
      <router-link class="page-link" :to="{ name: 'Buckets' }">Buckets</router-link>. These
      configurations can be found under the <i>Item Tiers</i> section in the
      <i class="text-gray-600">assortedtools-common.toml</i> config file.
    </p>
    <br />
    <p>
      Currently the only options to configure are Vanilla Item Tiers. Vanilla tools will not be
      affected by the configuration changes and only the tools in <i>Assorted Tools</i> will be
      updated. The default values for the Vanilla Item Tiers is what the original levels would be.
    </p>
    <img src="\mods\tools\tool_config.png" />
    <p>The following values can be configured:</p>
    <ul class="list-disc list-outer mx-6">
      <li>
        <i>harvestLevel</i> for tools, refers to what blocks it can break (a higher level is higher
        tier blocks).
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
    </ul>
  </div>
</template>
