<template>
  <div id="content">
    <h1><a name="buckets">Buckets</a></h1>
    <p>
      This mod adds Buckets with any default material seen below as well as all of the materials
      provided in <NuxtLink class="page-link" to="/core/materials">
        Assorted Core
      </NuxtLink>. These extra Buckets allow
      you to pickup more than one fluid depending on the type of bucket. By default the Wooden and
      Stone buckets only can store one buckets worth and after placement they break.
    </p>
    <div class="grid grid-cols-3 gap-4">
      <img src="\mods\tools\wooden_bucket_recipe.png">
      <img src="\mods\tools\stone_bucket_recipe.png">
      <img src="\mods\tools\golden_bucket_recipe.png">
      <img src="\mods\tools\diamond_bucket_recipe.png">
      <img src="\mods\tools\netherite_bucket_recipe.png">
    </div>
    <p>You are able to upgrade from Diamond Bucket to Netherite Bucket using a Netherite ingot.</p>
    <img src="\mods\tools\netherite_bucket_smithing_recipe.png">
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  pageTitle: 'Tools | Buckets'
})
</script>
