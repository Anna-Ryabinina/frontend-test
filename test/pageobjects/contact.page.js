const Page = require('./page');

class ContactPage extends Page {

    get callBtn () { return this.browser.$('div[data-test="icon-call-internal"]') }

    call () {
        this.callBtn.waitForDisplayed()
        this.callBtn.click(); 
    }

    open () {
        return super.open('people/teammates/437138');
    }
}

module.exports = ContactPage;
