import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './app'

let appReady = Promise.resolve();

console.log('appReady: ', appReady)

// Enable API mocking only in development
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  appReady = worker.start({
    serviceWorker: {
      /**
       * Use a custom Service Worker script URL to resolve
       * the mock worker served by Codesandbox.
       * @note You DO NOT need this in your application.
       * @see https://mswjs.io/docs/api/setup-worker/start#serviceworker
       */
      url: "/mockServiceWorker.js"
    }
  });
}

/**
 * Use deferred application mounting in order to work in a sandbox.
 * You MAY NOT need this in your application.
 * @see https://mswjs.io/docs/recipes/deferred-mounting
 */
appReady.then(() => {
  const root = createRoot(document.getElementById('app') as HTMLElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
