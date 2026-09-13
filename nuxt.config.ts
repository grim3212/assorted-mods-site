// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    'nuxt-link-checker',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  app: {
    rootId: 'app'
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/'
      ]
    }
  },
  routeRules: {
    '/tools/spears': { redirect: { to: '/tools/throwing-spears', statusCode: 301 } }
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://assortedmods.com',
    name: 'Assorted Mods',
    indexable: true
  }
})
