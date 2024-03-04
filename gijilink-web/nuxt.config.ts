// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase', '@nuxt/ui', '@nuxtjs/color-mode'],
  colorMode: {
    dataValue: 'theme', // activate data-theme in <html> tag
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000/'
    }
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm'
    }
  },
})