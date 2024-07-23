require('dotenv').config();
const { expect } = require('@playwright/test');

class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');  // Змініть на правильний локатор
        this.passwordInput = page.locator('input[name="password"]');  // Змініть на правильний локатор
        this.loginButton = page
