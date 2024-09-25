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
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Jersey+10&family=Stalinist+One&display=swap",
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
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false, 
    },
  ],
  content: {
    // Enable custom components for MDX support
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [],
      remarkMdx: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxtjs/seo",
    "@nuxt/scripts",
    "@nuxt/content",
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "fr", iso: "fr-FR", name: "Français" },
      { code: "de", iso: "de-DE", name: "Deutsch" },
      { code: "es", iso: "es-ES", name: "Español" },
      { code: "ja", iso: "ja-JP", name: "日本語" },
    ],
    strategy: "prefix_and_default",
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
  },

  plugins: ["~/plugins/emailjs.js"],
});