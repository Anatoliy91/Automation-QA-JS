require('dotenv').config();
const BasePage = require('./base.page');
const Header = require('../components/header.component');
const Sidebar = require('../components/sidebar.component');
const TableFooter = require('../components/tablefooter.component');

class LoginPage extends BasePage {
    constructor() {
        super();
        this.header = new Header();
        this.sidebar = new Sidebar();
        this.tableFooter = new TableFooter();
    }

    get usernameInput() { return $('input[name="username"]'); }  // Змініть на правильний локатор
    get passwordInput() { return $('input[name="password"]'); }  // Змініть на правильний локатор
    get loginButton() { return $('button[name="login"]'); }      // Змініть на правильний локатор

    open() {
        super.open('/');
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
