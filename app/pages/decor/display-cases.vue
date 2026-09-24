<template>
  <div id="content">
    <h1><a name="display_cases">Display Cases</a></h1>
    <img src="\mods\decor\display_cases.png">
    <p>
      A display case holds items on a shelf behind glass. There is no screen. You can right click the spot
      you want an item to sit in, and right click it again empty handed to take it back from a specific shelf.
    </p>
    <p>
      Wooden, stone, copper, iron, gold and diamond cases differ only in the colour of their frame.
      Breaking a case drops whatever is shown, and a comparator reads how full it is.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <Recipe id="assorteddecor:wooden_display_case" />
      <Recipe id="assorteddecor:stone_display_case" />
      <Recipe id="assorteddecor:copper_display_case" />
      <Recipe id="assorteddecor:iron_display_case" />
      <Recipe id="assorteddecor:gold_display_case" />
      <Recipe id="assorteddecor:diamond_display_case" />
    </div>

    <h2><a name="resizing_tool">Resizing Tool</a></h2>
    <p>
      A case is placed showing one item on one shelf, and that one item is drawn large. Use the
      resizing tool on it to grow it to four items on two shelves, or to nine items on three shelves. You can then use it once
      more to come back to one item and one platform.
    </p>
    <p>
      Shrinking a case hands back whatever it can no longer show.
    </p>
    <Recipe id="assorteddecor:resizing_tool" />

    <h2><a name="copper">Copper Display Cases</a></h2>
    <p>
      A copper case weathers where it stands, through exposed, weathered and oxidized, like any other
      copper. What is on show stays on show through every step. An axe scrapes a stage back off it,
      and a honeycomb waxes it to hold the stage it is at. Only the plain copper case can be crafted, the
      rest you weather or wax into.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Recipe id="assorteddecor:waxed_copper_display_case" />
      <Recipe id="assorteddecor:waxed_exposed_copper_display_case" />
      <Recipe id="assorteddecor:waxed_weathered_copper_display_case" />
      <Recipe id="assorteddecor:waxed_oxidized_copper_display_case" />
    </div>

    <h2><a name="museum">Museum Display Case</a></h2>
    <p>
      The museum edition stands two blocks tall: a carpeted plinth with the glass case on top of it.
      Everything goes in the glass half, the same nine slots as any other case.
    </p>
    <p>
      The plinth carries a placard. Name the case on an anvil before you place it, or right click
      the plinth with a named name tag to set what is written.
    </p>
    <Recipe id="assorteddecor:museum_display_case" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Display Cases'
})
</script>
