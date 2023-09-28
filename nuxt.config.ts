// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    'nuxt-seo-kit'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Zebra Tbilisi',
      siteDescription: 'Welcome to Zebra tblisi!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
]
})