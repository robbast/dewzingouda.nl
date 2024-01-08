import { createRoot, Root } from 'react-dom/client'
import App from './app'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import questions from './questions'
import QRCodes from './qrcodes'

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    environment: 'production',
    dsn: 'https://978729166dcf42ad854d9cfa323c4373@o172628.ingest.sentry.io/6341954',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1,
  })
}

const container: HTMLElement = document.getElementById('root') as HTMLElement

if ( ! container) {
  throw 'Element "#root" not found!'
}

const root: Root = createRoot(container)

if (window.location.hash === '#qrcodes') {
  root.render(<QRCodes questions={questions} />)
} else {
  root.render(<App />)
}

