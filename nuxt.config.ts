// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: [
    '@sun-typeface/suit/fonts/static/woff2/SUIT.css',
  ],
  runtimeConfig: {
    public: {
      supabaseUrl: 'process.env.SUPABASE_URL',
      supabaseKey: 'process.env.SUPABASE_KEY',
    },
  },
})
