// src/tests/loginTests.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage'); // Виправлено шлях

test.describe('Login Tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('https://dev.omni-dispatch.com/');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    await loginPage.login(username, password);

    // Перевірка, що користувач був успішно залогінений (залежить від специфіки сайту)
    await expect(page).toHaveURL('https://dev.omni-dispatch.com/dashboard');
  });

  test('should fail to login with invalid credentials', async ({ page }) => {
    const username = process.env.USERNAME;
    const password = 'invalid-password';

    await loginPage.login(username, password);

    // Перевірка, що з'явилось повідомлення про помилку
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
