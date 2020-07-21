const Page = require('./page');


class KeyboardPage extends Page {

    get keyboadrBtn () { return this.browser.$('li[data-test="tab-bar-keypad"]') }
    get keyboardInput () { return this.browser.$('input[data-test="keyboard-input-text"]') }
    get contactBtn () { return this.browser.$('div[data-test="item-button"]') }
    get callBtn () { return this.browser.$('button[data-test="keyboard-button-dial"]') }

    open () {
        return super.open('keyboard');
    }

    callToContact(name) {
        this.keyboadrBtn.click()
        this.keyboardInput.setValue(name)
        this.keyboardInput.click()
        this.contactBtn.click()
        this.callBtn.click()
    }
}

module.exports = KeyboardPage;
