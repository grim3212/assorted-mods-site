<template>
  <div id="content">
    <h1><a name="roadways">Roadway</a></h1>
    <p>
      Have you ever wanted to design a very basic road system in Minecraft? Well now you can with
      some Roadway blocks added by Assorted Decor. These blocks allow you to have roadways,
      manholes, lights, and sidewalks.
    </p>
    <img src="\mods\decor\roadways.png" />
    <h2><a name="required">Requirements</a></h2>
    <p>
      Before you can start crafting and playing around with the Roadways you will need some items
      that form the structure for these Roadway blocks.
    </p>
    <br />
    <h3><a name="tarball">Tarball</a></h3>
    <p>
      To get started you need to craft some Tarballs which will be used to create some
      <i>Asphalt</i> for the roads. But, you are also able to use Tarball to craft some Siding
      blocks in <router-link class="page-link" :to="{ name: 'Painting' }">Painting</router-link>.
    </p>
    <img src="\mods\decor\tarball_recipe.png" />

    <h3><a name="asphalt">Asphalt</a></h3>
    <p>
      Once you have turned some tar into Asphalt you can get started crafting some Roadways.
      <i
        >You are also able to Right-Click with the Asphalt in your hand to transform stone into
        Roadways without needing to craft</i
      >.
    </p>
    <img src="\mods\decor\asphalt_smelting.png" />

    <h2><a name="block">Roadway</a></h2>
    <p>
      The base <i>Roadway</i> is required to craft all of the other types of Roadways and is what
      you paint to get different patterns on top. Using
      <router-link class="page-link" :to="{ name: 'Painting' }">Paint Rollers</router-link> you are
      able to paint the top to the specified color by Right-Clicking a Roadway that is place. If you
      use the White Paint Roller it comes with extra patterns, just keep Right-Clicking. With a
      Water Bucket in hand you can clear Roadways.
    </p>
    <img src="\mods\decor\roadway_recipe.png" />
    <p>You are also able to paint and clear the Roadway in a crafting table.</p>
    <img src="\mods\decor\roadway_color_recipe.png" />
    <img src="\mods\decor\roadway_wash_recipe.png" />
    <h2><a name="manhole">Roadway Manhole</a></h2>
    <img src="\mods\decor\roadway_manhole.png" />
    <p>
      With a Roadway Manhole you can create a block that you are able to toggle (Right-Click) to
      pass in and out of the block. You can also use Steel from
      <router-link class="page-link" :to="{ name: 'Materials' }">Assorted Core</router-link> to
      craft with.
    </p>
    <img src="\mods\decor\roadway_manhole_recipe.png" />
    <h2><a name="light">Roadway Light</a></h2>
    <p>
      Using an
      <router-link class="page-link" :to="{ name: 'Fluro' }">Illumination Plate</router-link> you
      can embed it into the Roadway to provide a toggleable light source. Just power it with
      redstone to turn it on!
    </p>
    <img src="\mods\decor\roadway_light_recipe.png" />
    <h2><a name="sidewalk">Sidewalk</a></h2>
    <p>
      The last block to accompany your Roadway is a sidewalk block. This block has the special
      ability of speeding up your movement when you walk on it.
    </p>
    <img src="\mods\decor\sidewalk_recipe.png" />
  </div>
</template>
