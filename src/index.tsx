import { createRoot, Root } from 'react-dom/client'
import App from './app'

const container: HTMLElement = document.getElementById('root') as HTMLElement,
  root: Root = createRoot(container)

root.render(<App />)
