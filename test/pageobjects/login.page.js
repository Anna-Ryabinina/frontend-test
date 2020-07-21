const Page = require('./page');


class LoginPage extends Page {

    get inputUsername () { return this.browser.$('div[data-test="signin-email-input"] input') }
    get inputPassword () { return this.browser.$('div[data-test="signin-password-input"] input') }
    get btnSubmit () { return this.browser.$('button[data-test="signin-button"]') }

    login (username, password) {
        this.inputUsername.waitForDisplayed()
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click(); 
    }

    open () {
        return super.open('login');
    }
}

module.exports = LoginPage;
