const { Builder, Browser } = require('selenium-webdriver')


async function setupDriver() {
    const driver = await new Builder()
    .forBrowser('chrome')
    .build()

    return driver
}

module.exports = setupDriver