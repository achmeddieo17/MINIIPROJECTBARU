const { expect } = require('chai');
const { By, WebDriver } = require('selenium-webdriver')
const setupDriver = require('../utils/setupDriver')
const loginPage = require('../PageObjects/loginPage')

describe.only('EKAC - LOGIN TEST', function () {

    /** @type {WebDriver} */ let driver
    /** @type {loginPage} */ let login

    before(async function () {
        driver = await setupDriver()
        login = new loginPage(driver)
    })

    after(async function () {
        await driver.close()
    })

    describe('test negative login', function () {

        it('login tanpa email', async function () {
            await login.openUrl()
            await login.loginProcess('', 'dieo123456')
            await driver.sleep(3000)
            const test = await login.errmessage()
            expect(test).to.equals('Warning: No match for E-Mail Address and/or Password.')
        })
        it('login tanpa password', async function () {
            await login.openUrl()
            await login.loginProcess('achmeddieom@gmail.com', '')
            await driver.sleep(3000)
            const test = await login.errmessage()
            expect(test).to.equals('Warning: No match for E-Mail Address and/or Password.')
        })
    })

    describe('Test Positive Login', function () {

        it('login email dan password dengan benar', async function () {
            await login.openUrl()
            await login.loginProcess('achmeddieom@gmail.com', 'dieo123456')
            await driver.sleep(3000)
            const test = await login.textMyaccount()
            expect(test).to.include('My Account')
        })
    })
})