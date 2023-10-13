const { expect } = require('chai');
const { By, WebDriver } = require('selenium-webdriver')
const setupDriver = require('../utils/setupDriver')
const e2ePage = require('../PageObjects/e2e-Page')

describe('EKAC - E2E TEST', function () {

    /** @type {WebDriver} */ let driver
    /** @type {e2ePage} */ let e2e

    before(async function () {
        driver = await setupDriver()
        e2e = new e2ePage(driver)
    })

    after(async function () {
        await driver.close()
    })

    describe('Test E2E EkaCeluller', function () {

        it('e2e - EKAC - 001 - login email dan password dengan benar', async function () {
            await e2e.openUrl()
            await e2e.loginProcess('achmeddieom@gmail.com', 'dieo123456')
            // await driver.sleep(3000)
            const test = await e2e.textMyaccount()
            expect(test).to.include('My Account')
        })
       
        it('e2e - Test - 002 - Klik Macbook', async function () {
            await e2e.macbook()
            // await driver.sleep(3000)
            const test = await e2e.textmacbook()
            expect(test).to.equal('Apple Macbook Air 2020 M1 CHIP 256GB NEW TAM')
        })
        it('e2e - Test - 003 - Klik Apple Macbook Air 2020 M1 CHIP 256GB', async function () {
            await e2e.clickMacbook()
            
            const test = await e2e.price()
            expect(test).to.equal('Rp12,999,000.00')
        })
        it('e2e - Test -  004 - Colour And storage', async function() {
            await e2e.selectcolourandstorage()
            await driver.sleep(3000)

            const test = await e2e.yourorderText()
            expect(test).to.equal('shopping cart')
        })
        it('e2e - Test - 005 - Klik Shopping Cart', async function () {
            await e2e.yourorder()
            await driver.sleep(3000)

            const test = await e2e.shopcartText()
            expect(test).to.equal('Shopping Cart')

        })
        it('e2e - Test - 006 - Klik Checkout', async function () {
            await e2e.checkOut()
            await driver.sleep(3000)

            const test = await e2e.textCheckout()
            expect(test).to.equal('Checkout')

        })
        it('e2e - Test - 007 - Klik Continue Step 2', async function () {
            await e2e.continueBill2()
            await driver.sleep(3000)

            const test = await e2e.delivtext3()
            expect(test).to.include('I want to use an existing address')
        })
        it('e2e - Test - 008 - Klik Continue Step 3', async function () {
            await e2e.addressContinue()
            await driver.sleep(3000)

            const test = await e2e.delivtext()
            expect(test).to.include('Please select the preferred')
        })
        it('e2e - Test - 009 - Klik Continue Step 4', async function () {
            await e2e.continueShippingMethod()
            await driver.sleep(3000)

            const test = await e2e.delivtext5()
            expect(test).to.include('Please select the preferred')
        })
        it('e2e - Test - 010 - Klik Continue Step 5', async function () {
            await e2e.continuePayment()
            await driver.sleep(3000)

            const test = await e2e.delivtext6()
            expect(test).to.include('Product Name')
        })
        it('e2e - Test - 011 - Klik Account And Logout', async function () {
            await e2e.account()
            await driver.sleep(3000)
            
            const test = await e2e.textMyaccount()
            expect(test).to.include('My Account')

        })
        it('e2e - Test - 012 - Klik Logout', async function () {
            await e2e.Logout()
            await driver.sleep(3000)

        })
        
    })
})