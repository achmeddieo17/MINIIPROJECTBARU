const { WebDriver } = require ('selenium-webdriver')

class page {
    constructor(driver) {
        /** @type { WebDriver } */
        this.driver = driver
    }

    async openUrl (path = '/') {
        
        this.driver.get('https://ekaceluller.com' + path)
    }
}

module.exports = page