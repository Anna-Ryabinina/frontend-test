/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    constructor(browser) {
        this.browser = browser;
    }
    
    open (path) {
        return this.browser.url(`https://phone.aircall.io/${path}`)
    }
}
