const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'Desktop Light',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        colorScheme: 'light',
      },
    },
    {
      name: 'Desktop Dark',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 },
        colorScheme: 'dark',
      },
    },
    {
      name: 'Mobile Light',
      use: {
        ...devices['Pixel 5'],
        viewport: { width: 1080, height: 2340 },
        colorScheme: 'light',
      },
    },
    {
      name: 'Mobile Dark',
      use: {
        ...devices['Pixel 5'],
        viewport: { width: 1080, height: 2340 },
        colorScheme: 'dark',
      },
    },
  ],
});
