export default defineNuxtPlugin(async (nuxtApp) => {
  const { BrowserAgent } = await import('@newrelic/browser-agent/loaders/browser-agent')
  const { JSErrors } = await import('@newrelic/browser-agent/features/jserrors')
  const { Spa } = await import('@newrelic/browser-agent/features/spa')

  const nr = new BrowserAgent({
    init: {
      distributed_tracing: { enabled: true },
      privacy: { cookies_enabled: true },
      ajax: { deny_list: ['bam.nr-data.net'] },
    },
    loader_config: {
      accountID: '6579780',
      trustKey: '6579780',
      agentID: '1386259234',
      licenseKey: 'NRJS-2f3e4c53b27e1407637',
      applicationID: '1386259234',
    },
    info: {
      beacon: 'bam.nr-data.net',
      errorBeacon: 'bam.nr-data.net',
      licenseKey: 'NRJS-2f3e4c53b27e1407637',
      applicationID: '1386259234',
      sa: 1,
    },
    features: [Spa, JSErrors],
  })

  useState('browserAgent', () => nr)
})
