// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  
  devtools: { enabled: true },
  extends: ["nuxt-seo-kit"],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://zebratbilisi.ge",
      siteName: "Zebra Tbilisi",
      siteDescription: "Welcome to Zebra tblisi!",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  app: {
    head: {
       link: [
        // Preconnect to Google Fonts
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        // Preconnect to Google Fonts static domain with crossorigin attribute
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        // Include the Stalinist One font
        { href: 'https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap', rel: 'stylesheet' },
      ],
      // ... other head elements like meta tags
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "fr", iso: "fr-FR", name: "Français" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
});
