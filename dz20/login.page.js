require('dotenv').config();

class LoginPage {
    get usernameInput() { return $('input[name="username"]'); }  // Змініть на правильний локатор
    get passwordInput() { return $('input[name="password"]'); }  // Змініть на правильний локатор
    get loginButton() { return $('button[name="login"]'); }      // Змініть на правильний локатор

    open() {
        browser.url('https://dev.omni-dispatch.com/');
    }

    login(username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

    loginWithEnvCredentials() {
        this.login(process.env.USERNAME, process.env.PASSWORD);
    }
}

module.exports = new LoginPage();
