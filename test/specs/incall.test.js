const LoginPage = require('../pageobjects/login.page');
const OnboardingPage = require('../pageobjects/onboarding.page')
const ContactPage = require('../pageobjects/contact.page')
const IncallPage = require('../pageobjects/incall.page')

describe('Incall actions', () => {
    //agent phone (recieve a call)
    let phoneA
    //client phone (is calling)
    let phoneB

    before(() => {
        phoneA = new LoginPage(browserA)
        phoneA.open()
        phoneA.login('riabinina.hanna@outlook.com', 'LESQXcZde3Q=')
        phoneA = new OnboardingPage(browserA)
        phoneA.finishOnboarding()

        phoneB = new LoginPage(browserB)
        phoneB.open()
        phoneB.login('qa+test@aircall.io', 'f77398b7')
        phoneB = new OnboardingPage(browserB)
        phoneB.finishOnboarding()
        phoneB = new ContactPage(browserB)
        phoneB.open()
        phoneB.call()
      });

    it('user can answer the call', () => {
        phoneA = new IncallPage(browserA)
        phoneA.answerCall()
        phoneA.muteBtn.waitForDisplayed()
        expect(phoneA.muteBtn.isDisplayed()).toBeTruthy()
        expect(phoneA.holdBtn.isDisplayed()).toBeTruthy()
        expect(phoneA.hangupBtn.isDisplayed()).toBeTruthy()
        expect(phoneA.keypadBtn.isDisplayed()).toBeTruthy()
    });
    it('can mute call', () => {
        phoneA.mute()
        expect(phoneA.unmuteBtn.isDisplayed()).toBeTruthy()
    });
    it('can hold and unhold call', () => {
        phoneA.unmute()
        expect(phoneA.muteBtn.isDisplayed()).toBeTruthy()
    })
    it('can open keyboard', () => {
        phoneA.openKeypad()
        phoneA.closeKeypad()    
    })
    it('can end call', () => {
        phoneA.finishCall()

    })
});


