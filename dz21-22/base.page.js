class BasePage {
    open(path) {
        browser.url(path);
    }
}

module.exports = BasePage;
