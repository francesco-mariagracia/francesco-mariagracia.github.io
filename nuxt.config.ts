// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  app: {
    // Site servi à la racine de francesco-mariagracia.github.io
    baseURL: '/',
    head: {
      htmlAttrs: { class: 'scroll-smooth' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#F9F6EE' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Polices des deux versions (moderne : DM Serif Display + DM Sans, carnet : Lora + Work Sans)
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display:ital@0;1&family=Lora:ital,wght@0,500;0,600;1,500&family=Work+Sans:wght@400;500;700&display=swap',
        },
      ],
    },
  },

  i18n: {
    baseUrl: 'https://francesco-mariagracia.github.io',
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
      { code: 'es', language: 'es-VE', name: 'Español', file: 'es.json' },
      { code: 'pt', language: 'pt-PT', name: 'Português', file: 'pt.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_lang',
      redirectOn: 'root',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/moderne', '/carnet', '/it', '/es', '/pt'],
    },
  },
})
