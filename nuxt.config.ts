// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      script: [
        // 使用包
        // {
        //   src: '/new-relic-setup.js',
        //   defer: true,
        // },
      ],
    },
  },
})
