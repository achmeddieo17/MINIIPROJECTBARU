const { expect } = require('chai');
const { By, WebDriver } = require('selenium-webdriver')
const setupDriver = require('../utils/setupDriver')
const products = require('../PageObjects/productPage')
const e2ePage = require('../PageObjects/e2e-Page')


describe('EKAC - Detail Product', function () {
    /** @type {WebDriver} */ let driver
    /** @type {products} */ let product
    /** @type {e2ePage} */ let e2e

    before(async function () {
        driver = await setupDriver()
        product = new products(driver)
        e2e = new e2ePage(driver)
    })
    after(async function () {
        await driver.close()
    })

    describe('EKAC - Lihat Detail Product', function () {
        it('EKAC - 001 - Products - Click Macbook', async function () {
            await product.openUrl()
            await product.macbook()
            await driver.sleep(2000)

            const test = await product.compareText()
            expect(test).to.equals('Product Compare (0)')
        })
        it('EKAC - 002 - Klik Product Macbook', async function () {

            await product.klikMacbook()
            
            const test = await product.textPrice()
            expect(test).to.equal('Rp12,999,000.00')
        })
        it('EKAC - 003 - Klik Whislist Tanpa Login', async function (){
            await product.whisList()

            const test = await product.textSuccess()
            expect(test).to.include('You must login')
        })
        it('EKAC - 004 - Klik Compare This Product Tanpa Login', async function () {
            await product.compareProduct()
            await driver.sleep(3000)

            // const test = await product.compareText()
            // expect(test).to.equal(' Success: You have added ')
        })
        it('EKAC - 005 - Select Color and Storage', async function () {
            await product.selectColorandStorage()
            // await product.inputpricesimulasi('2')
            await driver.sleep(3000)
        })
        it('EKAC - 006 - Add to Cart', async function () {
            await product.addcart()
            await driver.sleep(2000)

            const test = await e2e.yourorderText()
            expect(test).to.equal('shopping cart')
        })
        it('EKAC - 007 - Review', async function () {
            await product.clickReview()

            const test = await product.textReview()
            expect(test).to.equal('Write a review')
        })
        it('EKAC - 008 - Input Review', async function (){
            await product.reviewInput('dieo maulana', 'ini adalah produk macbook pertamaku')
            // await driver.sleep(5000)
            const test = await product.textSuccess()
            expect(test).to.include('Success')
        })
    })
    describe('Negative Test Input Review', function () {
        it('EKAC - 009 - Input Review dibawah 25 huruf', async function () {
            await product.reviewInput('dieo maulana', 'apa aja')
            
            const test = await product.reviewWarning()
            expect(test).to.include('Warning')
        })
    })
})
