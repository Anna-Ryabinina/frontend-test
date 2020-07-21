const Page = require('./page');

class OnboardingPage extends Page {

    get btnContinue () { return this.browser.$('button[data-test="continue-button"]') }
    get btnNext () { return this.browser.$('button[data-test="next-button"]') }
    get useMicBtn () { return this.browser.$('button[data-test="use-button"]')}
    
    finishOnboarding () {
        this.btnContinue.waitForDisplayed()
        this.btnContinue.click()
        this.btnNext.click() 
        this.btnNext.click() 
        this.btnNext.click()
        this.btnNext.click()
        //this.browser.acceptAlert()
    }

    open () {
        return super.open('login');
    }
}

module.exports = OnboardingPage;
