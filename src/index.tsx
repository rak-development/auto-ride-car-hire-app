import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

import './i18n'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
