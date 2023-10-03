// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  devtools: { enabled: true },
  extends: [
    'nuxt-seo-kit'
  ],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://zebratbilisi.ge',
      siteName: 'Zebra Tbilisi',
      siteDescription: 'Welcome to Zebra tblisi!',
      language: 'en', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  i18n: {
      locales: [ { code: 'en', iso: 'en-US'},
      { code: 'fr', iso: 'fr-FR'},],
  strategy: 'prefix_except_default',
  defaultLocale: 'en',
    vueI18n: './i18n.config.ts'
  }
})