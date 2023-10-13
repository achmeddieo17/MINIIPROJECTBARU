const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const options = require('../config/options')
const login = require('../pageObjects/login')
const e2ePage = require('../pageObjects/e2e-Page')


describe('Test Ecommerce App', function () {
  /** @type {WebdriverIO.Browser} */ let driver
  /** @type {login} */ let Login
  /** @type {e2ePage} */ let e2e

  before(async function () {
    driver = await setupDriver(options)
    Login = new login(driver)
    e2e = new e2ePage(driver)

  })
  after(async function () {
    await driver.pause(2000)
    await driver.deleteSession()
  })

  describe('ECOM - NegativeTest - Login', async function () {
    it('ECOM - 001 - Login Tanpa Password', async function () {
      await e2e.btnskip()

      await Login.clickBurger()
      await Login.clickAccount()
      await Login.inputLogin('dieo@gmail.com', '')

      const test = await Login.errPassword()
      expect(test).to.equal('Please Enter Password')
    })
    it('ECOM - 002 - Login Tanpa Email', async function () {

      await Login.inputLogin('', 'dieo123456')

      const test = await Login.errPassword()
      expect(test).to.equal('Please Enter Correct Email ID')
    })
  })
  describe('ECOM - Positive Login', function () {
    it('ECOM - 003 - Login Dengan Email dan Password yang Benar', async function () {
      await Login.inputLogin('dieo@gmail.com', 'dieo123456')

      const test = await Login.Mydetails()
      expect(test).to.equal('MY DETAILS')
    })
  })
})