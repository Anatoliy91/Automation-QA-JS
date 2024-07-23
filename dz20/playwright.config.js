// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    timeout: 60000,
    use: {
        headless: true,
        baseURL: process.env.BASE_URL,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        screenshot: 'only-on-failure'
    },
});
