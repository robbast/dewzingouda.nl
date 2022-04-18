import { createRoot, Root } from 'react-dom/client'
import App from './app'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    environment: 'production',
    dsn: 'https://978729166dcf42ad854d9cfa323c4373@o172628.ingest.sentry.io/6341954',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1,
  })
}

const container: HTMLElement = document.getElementById('root') as HTMLElement,
  root: Root = createRoot(container)

root.render(<App />)
