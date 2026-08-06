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
            // Register mochawesome reporter plugin
            require('cypress-mochawesome-reporter/plugin')(on);

            // Register cypress-split plugin
            require('cypress-split')(on, config);

            // IMPORTANT: Return config so plugin updates take effect
            return config;
        },
        retries: {
            runMode: 2,
            openMode: 0,
        },
        video: true,
        screenshotOnRunFailure: true
    }
})
