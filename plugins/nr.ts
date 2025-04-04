import { JSErrors } from '@newrelic/browser-agent/features/jserrors'
import { Spa } from '@newrelic/browser-agent/features/spa'
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

export default defineNuxtPlugin(async (nuxtApp) => {
  // 必须将ssr设为false（spa），否则windows是undefined
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
  // console.log(nr)
  nr.noticeError(new Error('some error'))
})
