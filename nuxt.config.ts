import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'nuxt-link-checker',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  devtools: { enabled: true },
  app: {
    rootId: 'app'
  },
  css: ['~/assets/css/tailwind.css'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://assortedmods.com',
    name: 'Assorted Mods',
    indexable: true
  },
  routeRules: {
    '/tools/spears': { redirect: { to: '/tools/throwing-spears', statusCode: 301 } }
  },
  compatibilityDate: '2026-09-13',
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/'
      ]
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        commaDangle: 'only-multiline'
      }
    }
  },
})
