// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxtjs/supabase', '@nuxt/ui', '@nuxtjs/color-mode'],
  colorMode: {
    dataValue: 'theme' // activate data-theme in <html> tag
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000/'
    }
  },
  supabase: {
    // redirectOptions: {
    //   login: '/',
    //   callback: '/'
    // }
    redirect: false
  },
  typescript: {
    shim: false, // shimsファイル生成の無効化（VSCodeでVolarを使う場合はfalseにする）
    strict: true, // 型チェックを厳格化
    typeCheck: false // nuxt devまたはnuxt build時に型チェックを実行
  }
})
