const BasePage = require('./base.page');
const Header = require('./components/header.component');
const Sidebar = require('./components/sidebar.component');
const TableFooter = require('./components/tablefooter.component');

class DriversPage extends BasePage {
    constructor() {
        super();
        this.header = new Header();
        this.sidebar = new Sidebar();
        this.tableFooter = new TableFooter();
    }

    open() {
        super.open('/drivers');
    }
}

module.exports = new DriversPage();
