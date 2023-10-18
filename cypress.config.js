const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pdm3nr',
  e2e: {
    // baseUrl: 'https://unrivaled-bunny-61bef3.netlify.app/',
    baseUrl: 'http://localhost:8000',
    excludeSpecPattern: [ '*/**/1-getting-started',  '*/**/2-advanced-examples'],
    setupNodeEvents(on) {
      on('task', {
        log(message) {
          console.log(message)
    
          return null
        },
        table(message) {
          console.table(message)
    
          return null
        }
      })
    },
  },
});
