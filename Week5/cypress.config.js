const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl : 'https://kasirdemo.belajarqa.com',
    specPattern : 'cypress/e2e',
    chromeWebSecurity : false,
    viewportWidth: 1350,
    viewportHeight: 790,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
