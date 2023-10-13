const { expect } = require('chai');
const { By, WebDriver } = require('selenium-webdriver')
const setupDriver = require('../utils/setupDriver')
const registrasion = require('../PageObjects/registration')

describe.skip('test negative registration', function () {
    /** @type {WebDriver} */ let driver
    /** @type {registrasion } */ let register

    before(async function() {
        driver = await setupDriver()
        register = new registrasion(driver)
    })
    // afterEach(async function () {
    //     await driver.sleep(500)
    // })
    after(async function (){
        await driver.close()
    })
    
    it('test dengan firstname dan lastname kosong', async function () {
        await register.openPage()
        await register.RegisProcess('','Maulana','achmeddieom@gmail.com')

        const test = await register.errorMessage()
        expect(test).to.equals('First Name must be between 1 and 32 characters!')
    })
})



    