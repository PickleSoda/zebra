// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://zebratbilisi.ge",
      siteName: "Zebra Tbilisi",
      siteDescription: "Welcome to Zebra Tbilisi!",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
    },
  },

  app: {
    head: {
      link: [
        // Preconnect to Google Fonts
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        // Preconnect to Google Fonts static domain with crossorigin attribute
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        // Include the Stalinist One font
        {
          href: "https://fonts.googleapis.com/css2?family=Stalinist+One&display=swap",
          rel: "stylesheet",
        },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
      ],
      script: [
        {
          type: "module",
          src: "https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js",
        },
      ],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxtjs/seo",
    "@nuxt/scripts"
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "fr", iso: "fr-FR", name: "Français" },
      { code: "de", iso: "de-DE", name: "Deutsch" },
      { code: "es", iso: "es-ES", name: "Español" },
      { code: "ja", iso: "ja-JP", name: "日本語" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://zebratbilisi.ge",
    name: "Zebra Tbilisi",
    description: "ZEBRA, a creative agency founded in Tbilisi",
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      failOnError: false,
    },
    rollupConfig: process.env.NODE_ENV === 'production' ? {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/nitropack')) {
            return 'nitropack';
          }
          if (id.includes('node_modules/@nuxtjs/sitemap')) {
            return 'sitemap';
          }
        }
      }
    } : {},
  },

  plugins: ["~/plugins/emailjs.js"],

  // Custom build configuration to handle chunking and circular dependencies
  build: {
    extend(config, { isDev, isClient }) {
      if (!isDev && isClient) {
        config.output = {
          ...config.output,
          manualChunks(id) {
            if (id.includes('node_modules/nitropack')) {
              return 'nitropack';
            }
            if (id.includes('node_modules/@nuxtjs/sitemap')) {
              return 'sitemap';
            }
          }
        };
      }
    },
  },
});
