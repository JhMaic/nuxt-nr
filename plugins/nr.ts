import { Agent } from '@newrelic/browser-agent'
import { Spa } from '@newrelic/browser-agent/features/spa'

export default defineNuxtPlugin(async (nuxtApp) => {
  // 必须将ssr设为false（spa），否则windows是undefined
  new Agent({
    init: { session_replay: { enabled: true, block_selector: '', mask_text_selector: '*', sampling_rate: 10.0, error_sampling_rate: 100.0, mask_all_inputs: true, collect_fonts: true, inline_images: false, inline_stylesheet: true, fix_stylesheets: true, preload: false, mask_input_options: {} }, distributed_tracing: { enabled: true }, privacy: { cookies_enabled: true }, ajax: { deny_list: ['bam.nr-data.net'] } },
    loader_config: { accountID: '6579780', trustKey: '6579780', agentID: '1386259234', licenseKey: 'NRJS-2f3e4c53b27e1407637', applicationID: '1386259234' },
    info: { beacon: 'bam.nr-data.net', errorBeacon: 'bam.nr-data.net', licenseKey: 'NRJS-2f3e4c53b27e1407637', applicationID: '1386259234', sa: 1 },
    features: [Spa],
  })
})
