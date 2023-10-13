const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const options = require('../config/options')
const login = require('../pageObjects/login')
const account = require('../pageObjects/myAccount')
const e2ePage = require('../pageObjects/e2e-Page')

describe.only('Test Ecommerce App', function () {
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

    describe('ECOM - TEST - E2E Proses Checkout', function () {
        it('ECOM - 001 - Login Dengan Email dan Password yang Benar', async function () {
            await e2e.btnskip()
            await Login.clickBurger()
            await Login.clickAccount()
            await Login.inputLogin('dieo@gmail.com', 'dieo123456')

            const test = await Login.Mydetails()
            expect(test).to.equal('MY DETAILS')
        })
        it('ECOM - 002 - Back To Home', async function() {
            await e2e.backhome1()

            const test = await e2e.textecommerce()
            expect(test).to.equal('eCommerce App')
        })
        it('ECOM - 003 - Klik Groceries', async function () {
            await e2e.Potato()
        })
        it('ECOM - 004 - Klik Fruits Vegan', async function () {
            await e2e.klikFruitVegan()
        })
        it('ECOM - 005 - Klik Vegetables', async function () {
            await e2e.klikvegentable()
        })
        it('ECOM - 006 - Klik potato', async function () {
            await e2e.klikpotato()
            const test = await e2e.quantity()
            expect(test).to.equal('Quantity')
        })
        it('ECOM - 007 - 2Kg Potato', async function() {
            await e2e.click2kg()
            await e2e.quantityAdd()
            await e2e.quantityMinus()
        })
        it('ECOM - 008 - Add To Cart', async function() {
            await e2e.Addcart()
        })
        it('ECOM - 009 - Click Cart', async function() {
            await e2e.Cart()

            const test = await e2e.removeText()
            expect(test).to.equal('REMOVE')
        })
        it('ECOM - 010 - Checkout', async function() {
            await e2e.Checkout()

            const test = await e2e.textCustDetails()
            expect(test).to.equal('Customer Details')
        })
        it('ECOM - 011 - Set Address', async function() {
            await e2e.selectAddress('aa','aa','123456','aa','aa','aa')
            
    
            const test = await e2e.paymentmethod()
            expect(test).to.equal('Payment Method.')
        })
        it('ECOM - 012 - Select Payment Method',async function () { 
            
            await e2e.selectPayment()
            const test = await e2e.orderView()
            expect(test).to.equal('  VIEW ORDERS  ')
        })
        it('ECOM - 013 - View Order',async function () {
            await e2e.clickOrderView()
        })
    })
})