const test = require('./fixtures');
const { expect } = require('@playwright/test');

test('should load the correct theme', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const theme = await page.evaluate(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  console.log(`Current theme: ${theme}`);
  expect(theme).toBe(page.context()._options.colorScheme);
});
