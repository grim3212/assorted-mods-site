<template>
  <router-view></router-view>
</template>

<style lang="postcss">
#content h1 {
  @apply text-gray-200 text-3xl py-2;
}
#content h2 {
  @apply text-gray-200 text-2xl py-2;
}
#content img {
  @apply mx-auto rounded-lg my-2;
}
#content {
  @apply text-gray-400;
}
#content .muted {
  @apply text-gray-600;
}
#content a:not(.page-link):not(.changelog) {
  @apply text-blue-600 border-l-2 border-solid border-blue-600 pl-1;
}
#content a.page-link {
  @apply text-blue-600;
  &:hover {
    @apply text-blue-400;
  }
  &:visited {
    @apply text-purple-600;
  }
}
</style>
