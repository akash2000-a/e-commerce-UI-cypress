const { defineConfig } = require('cypress')

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: false,
        html: true,
        json: true
    },
    e2e: {
        baseUrl: 'https://www.saucedemo.com/',
        setupNodeEvents(on, config) {
            // This is required to compile and save the HTML report files
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        // Auto-retry failed tests in headless/CI mode to avoid flakiness
        retries: {
            runMode: 2,
            openMode: 0,
        },
        video: true,
        screenshotOnRunFailure: true
    }
})
