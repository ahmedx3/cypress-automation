const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,ts}', // Specify test file patterns
    watchForFileChanges: false, // Disable watching for file changes
    chromeWebSecurity: false, // Disable Chrome web security
    blockHosts: ['https://events.backtrace.io'], // Block specified hosts
    reporter: 'cypress-mochawesome-reporter',
    video: true,
    retries: 1,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
