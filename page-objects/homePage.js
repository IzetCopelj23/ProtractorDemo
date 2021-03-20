var HomePage = function () {
    var usernameInput = element(by.id('username'));
    var passwordInput = element(by.id('password'));
    var loginButton = element(by.name('login'));

    this.disableAngular = function () {
        return browser.waitForAngularEnabled(false);
    }
    this.getHomePage = async function () {
        await browser.get('https://cuddleclones.com');
    };
    this.getLoginPage = async function () {
        await browser.get('https://cuddleclones.com/my-account/');
    };
    this.setName = async function (name) {
        await usernameInput.sendKeys(name);
    };
    this.setPassword = async function (password) {
        await passwordInput.sendKeys(password);
    };
    this.getUsername = function () {
        return usernameInput.getAttribute('value');
    };
    this.getPassword = function () {
        return passwordInput.getAttribute('value');
    };
    this.login = function () {
        loginButton.click();
    }

    this.closePopup = function() {
        var exitButton = element(by.css('.cf-cta-close'));
        exitButton.isPresent().then(function (result) {
            if (result) {
                console.log('zessw1');
                exitButton.click();
            } else {
                //do nothing

            }
        });
    }

};
module.exports = new HomePage();