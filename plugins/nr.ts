export default defineNuxtPlugin((nuxtApp) => {
  useBrowserAgent().value.noticeError(new Error('Error agent'))
})
