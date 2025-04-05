import type { BrowserAgent } from '@newrelic/browser-agent'

export default function () {
  return useState<BrowserAgent>('browserAgent')
}
