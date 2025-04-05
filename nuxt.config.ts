// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  hooks: {
    // generate时不会生成对应router的html而是唯一一个
    'prerender:routes': function ({ routes }) {
      routes.clear() // Do not generate any routes (except the defaults)
    },
  },

})
