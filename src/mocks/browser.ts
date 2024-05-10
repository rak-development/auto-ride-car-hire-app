import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Configure the Service Worker for in-browser request interception
export const worker = setupWorker(...handlers)
