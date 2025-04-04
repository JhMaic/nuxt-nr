// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // 如果不设置成false，则windows会使undefined（只有spa才不是）
  ssr: false,
  app: {
  },
})
