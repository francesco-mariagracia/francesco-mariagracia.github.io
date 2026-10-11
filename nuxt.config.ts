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
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Great+Vibes&family=Lato:wght@300;400;700&display=swap',
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
      routes: ['/', '/it', '/es', '/pt'],
    },
  },
})
