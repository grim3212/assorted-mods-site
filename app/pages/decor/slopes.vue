<template>
  <div id="content">
    <h1><a name="slopes">Slopes</a></h1>
    <p>
      There are many <i>Slopes</i> that Assorted Decor adds as well. These slopes usually provide
      shapes that you can't normally get with Minecraft's model system and allow you're world to
      look a bit smoother. All slopes should support being <i>waterlogged</i> and being placed
      differently depending on the side of the block that it is placed on and where on that side
      that it was, think upside down stairs.
    </p>
    <h2><a name="slope">Colorizer Slope</a></h2>
    <p>Slopes are half of a full block and operate the same as straight stairs.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_slope" />
      <Recipe id="assorteddecor:colorizer_slope_stonecutting" />
    </div>
    <h2><a name="sloped_angle">Colorizer Sloped Angle</a></h2>
    <p>Sloped angles point towards a corner and can be waled up like a corner stair.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_sloped_angle" />
      <Recipe id="assorteddecor:colorizer_sloped_angle_stonecutting" />
    </div>
    <h2><a name="slanted_corner">Colorizer Slanted Corner</a></h2>
    <p>Slanted corners are a sharper incline the sloped angles but can still be walked up.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_slanted_corner" />
      <Recipe id="assorteddecor:colorizer_slanted_corner_stonecutting" />
    </div>
    <h2><a name="corner">Colorizer Corner</a></h2>
    <p>Corners are a sideways cut of a full block.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_corner" />
      <Recipe id="assorteddecor:colorizer_corner_stonecutting" />
    </div>
    <h2><a name="oblique_slope">Colorizer Oblique Slope</a></h2>
    <p>
      Oblique slopes act as a corner piece on stairs and are basically missing a slanted corner.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_oblique_slope" />
      <Recipe id="assorteddecor:colorizer_oblique_slope_stonecutting" />
    </div>
    <h2><a name="sloped_intersection">Colorizer Sloped Intersection</a></h2>
    <p>
      Sloped intersections are what would happen if two slopes were combined and act as corner
      stairs.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_sloped_intersection" />
      <Recipe id="assorteddecor:colorizer_sloped_intersection_stonecutting" />
    </div>
    <h2><a name="pyramid">Colorizer Pyramid</a></h2>
    <p>Pyramids only count as half a block, and are just a small pyramid.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_pyramid" />
      <Recipe id="assorteddecor:colorizer_pyramid_stonecutting" />
    </div>
    <h2><a name="full_pyramid">Colorizer Full Pyramid</a></h2>
    <p>
      Large pyramids can be climbed up but the highest point is in the middle as you would suspect.
    </p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_full_pyramid" />
      <Recipe id="assorteddecor:colorizer_full_pyramid_stonecutting" />
    </div>
    <h2><a name="sloped_post">Colorizer Sloped Post</a></h2>
    <p>Sloped post can not be climbed up and are just a large post.</p>
    <div class="flex flex-wrap gap-4">
      <Recipe id="assorteddecor:colorizer_sloped_post" />
      <Recipe id="assorteddecor:colorizer_sloped_post_stonecutting" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Decor | Slopes'
})
</script>
