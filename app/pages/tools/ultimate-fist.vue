<template>
  <div id="content">
    <h1><a name="ultimate_fist">Ultimate Fist</a></h1>
    <p>
      The Ultimate Fist is an overpowered tool left behind by an ancient civilization. The fragments
      of which can be found across all three dimensions and are required to be able to craft it.
    </p>
    <img src="\mods\tools\ultimate_fist_recipe.png">

    <p>
      The Ultimate Fist by default is absurdly powerful and can break blocks extremely fast and one
      shot many mobs. All of the tools are configurable using the same configuration that is
      explained at
      <NuxtLink class="page-link" to="/tools/material-config">
        Material Config
      </NuxtLink>.
      <br>
      <br>
      <b>Side note</b>: A number of the configuration values are unused since this does not have other
      tools/armor associated with it and it is not allowed to be enchanted.
    </p>

    <br>
    <br>
    <table class="border-collapse border border-slate-500 table-fixed">
      <caption class="caption-bottom text-sm">
        The default fragment distrubution across dimensions and chest loot.
      </caption>
      <thead>
        <tr>
          <th class="border border-slate-500 px-4">
            Dimension
          </th>
          <th class="border border-slate-500 px-4">
            Loot Tables
          </th>
          <th class="border border-slate-500 px-4 w-56">
            Fragment Pieces
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-slate-500 px-4">
            Overworld
          </td>
          <td class="border border-slate-500 px-4">
            <i>stronghold_corridor</i>, <i>stronghold_crossing</i>, <i>stronghold_library</i>,
            <i>woodland_mansion</i>, <i>underwater_ruin_big</i>, <i>underwater_ruin_small</i>, <i>ancient_city</i>
          </td>
          <td class="border border-slate-500 px-4 w-56">
            <ul class="list-disc list-inside">
              <li><strong>U</strong> Fragment</li>
              <li><strong>L</strong> Fragment</li>
              <li><strong>T</strong> Fragment</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="border border-slate-500 px-4">
            Nether
          </td>
          <td class="border border-slate-500 px-4">
            <i>nether_bridge</i>, <i>ruined_portal</i>
          </td>
          <td class="border border-slate-500 px-4 w-56">
            <ul class="list-disc list-inside">
              <li><strong>I</strong> Fragment</li>
              <li><strong>M</strong> Fragment</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="border border-slate-500 px-4">
            End
          </td>
          <td class="border border-slate-500 px-4">
            <i>end_city_treasure</i>
          </td>
          <td class="border border-slate-500 px-4 w-56">
            <ul class="list-disc list-inside">
              <li><strong>A</strong> Fragment</li>
              <li><strong>E</strong> Fragment</li>
              <li><strong>Unknown</strong> Fragment</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Ultimate Fist'
})
</script>
