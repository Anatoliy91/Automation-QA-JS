const LoginPage = require('./login.page');

describe('Login Page', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.loginWithEnvCredentials();
        // Перевірка на успішний логін (змініть на правильний локатор та перевірку)
        const welcomeMessage = $('#welcome_message'); // Змініть на правильний локатор
        expect(welcomeMessage).toBeDisplayed();
    });

    it('should not login with invalid credentials', () => {
        LoginPage.open();
        LoginPage.login('invalid_username', 'invalid_password');
        // Перевірка на невдалий логін (змініть на правильний локатор та перевірку)
        const errorMessage = $('#error_message'); // Змініть на правильний локатор
        expect(errorMessage).toBeDisplayed();
    });
});
