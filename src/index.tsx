import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

import './i18n'

async function deferRender() {
  const { worker } = await require('./mocks/worker.ts')
  return worker.start()
}

deferRender().then(() => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})
