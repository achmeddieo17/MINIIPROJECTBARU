const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const options = require('../config/options')
const login = require('../pageObjects/login')
const account = require('../pageObjects/myAccount')
const e2ePage = require('../pageObjects/e2e-Page')


describe('Test MyAccount Details - Ecommerce App', function () {
  /** @type {WebdriverIO.Browser} */ let driver
  /** @type {login} */ let Login
  /** @type {account} */ let Account
  /** @type {e2ePage} */ let e2e


    before(async function () {
        driver = await setupDriver(options)
        Login = new login(driver)
        Account = new account(driver)
        e2e = new e2ePage(driver)


    })
    after(async function () {
        await driver.pause(2000)
        await driver.deleteSession()
    })

    describe('ECOM - MyAccount', function () {
        it('ECOM - 001 - Login', async function () {
            await e2e.btnskip()
            await Login.clickBurger()
            await Login.clickAccount()
            await Login.inputLogin('dieo@gmail.com', 'dieo123456')

            const test = await Login.Mydetails()
            expect(test).to.equal('MY DETAILS')
        })
        it('ECOM - 002 - My Details', async function () {
            
            await Account.details()

            const test = await Account.textDetails()
            expect(test).to.equal('Customer Details')
        })
        it('ECOM - 003 - My Orders', async function () {
            await Account.back()
            await Account.orders()
        })
        it('ECOM - 004 - Product Return', async function () {
            await Account.back()
            await Account.return()
        })
        it('ECOM - 005 - My Orders', async function () { 
            await Account.back()
            await Account.tracking()

            const test = await Account.orderId()
            expect(test).to.equal('Order Id')
        })
    })
})
