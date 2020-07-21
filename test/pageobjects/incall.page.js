const Page = require('./page');


class IncallPage extends Page {

    get muteBtn () { return this.browser.$('div[data-test="action-mute"]') }
    get unmuteBtn () { return this.browser.$('div[data-test="action-unmute"]') }
    get holdBtn () { return this.browser.$('div[data-test="action-hold"]') }
    get keypadBtn () { return this.browser.$('div[data-test="action-keypad"]') }
    get hangupBtn () { return this.browser.$('button[data-test="hangup-button"]') }
    get keypadInput () { return this.browser.$('div[data-test="keypad-panel"] input') }
    get keypadCloseBtn () { return this.browser.$('div[data-test="modal-close"]') }

    get answerCallBtn () { return this.browser.$('button[data-test="keyboard-button-dial"]')}
    get cancelCallBtn () { return this.browser.$('button[data-test="hangup-button"]')}

    answerCall() {
        this.answerCallBtn.waitForDisplayed()
        this.answerCallBtn.click()
    }

    cancelCall() {
        this.cancelCallBtn.waitForDisplayed()
        this.cancelCallBtn.click()
    }

    openKeypad() {
        this.keypadBtn.waitForDisplayed()
        this.keypadBtn.click()
    }

    closeKeypad() {
        this.keypadCloseBtn.waitForDisplayed()
        this.keypadCloseBtn.click()
    }

    mute() {
        this.muteBtn.waitForDisplayed()
        this.muteBtn.click()
    }

    unmute() {
        this.unmuteBtn.waitForDisplayed()
        this.unmuteBtn.click()
    }

    finishCall() {
        this.hangupBtn.waitForDisplayed()
        this.hangupBtn.click()
    }

    open () {
        return super.open('incall');
    }
}

module.exports = IncallPage;
