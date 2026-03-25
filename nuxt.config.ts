// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],

  // Dockerコンテナ外（ブラウザ）からアクセス可能にする設定
  devServer: {
    host: '0.0.0.0', // すべてのネットワークインターフェースを許可
    port: 3333, // Next.js(3000)と被らないポートを指定
  },

  // Nuxt 4のディレクトリ構造を有効化
  future: {
    compatibilityVersion: 4,
  },
});
