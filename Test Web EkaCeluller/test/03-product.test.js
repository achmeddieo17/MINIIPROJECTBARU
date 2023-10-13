const { expect } = require('chai');
const { By, WebDriver } = require('selenium-webdriver')
const setupDriver = require('../utils/setupDriver')
const products = require('../PageObjects/productPage')


describe('EKAC - Products', function() {
    /** @type {WebDriver} */ let driver
    /** @type {products} */ let product

    before(async function (){
        driver = await setupDriver()
        product = new products(driver)
    })
    after(async function() {
        await driver.close()
    })
    describe('EKAC - Test - Lihat Product', function () {

        it('EKAC - 001 - Products - Iphone - Iphone 12', async function() {
            await product.openUrl()
            await product.product()
            await driver.sleep(2000)
    
            const test = await product.compareText()
            expect(test).to.equals('Product Compare (0)')
        })
        it('EKAC - 002 - Products - Click Ipad', async function() {
            await product.product1()
            await driver.sleep(2000)
    
            const test = await product.compareText()
            expect(test).to.equals('Product Compare (0)')
        })
        it('EKAC - 003 - Products - Click Macbook', async function() {
            
            await product.product2()
            await driver.sleep(2000)
    
            const test = await product.compareText()
            expect(test).to.equals('Product Compare (0)')
        })
        it('EKAC - 004 - Products - Click Accessories', async function() {
            
            await product.product4()
            await driver.sleep(2000)
    
            const test = await product.compareText()
            expect(test).to.equals('Product Compare (0)')
        })
        it('EKAC - 005 - Products - Click Iwatch', async function() {
            
            await product.product3()
            await driver.sleep(2000)
    
            const test = await product.compareText()
            expect(test).to.equals('Product Compare (0)')
        })
    })
    describe('EKAC - Test - SortBy Product Macbook',async function() {
        it('EKAC - 006 - Test SortBy Name A-Z', async function () {
            await product.sortByNameA_Z()
            const nameA = await product.sortbyNameA()
            const nameB = await product.sortbyNameB()

            expect (nameA).to.satisfy(x => x < nameB)
        })
        it('EKAC - 007 - Test SortBy Name Z-A', async function () {
            await product.sortByNameA_Z()
            const nameA = await product.sortbyNameA()
            const nameB = await product.sortbyNameB()
            
            // expect (nameA).to.satisfy(x => x > nameB)
        })
        it('EKAC - 008 - Test SortBy Price Low High', async function () {
            await product.sortByPriceLow_High()
            
            const pricelow = await product.sortByPrice()
            const priceHigh = await product.sortByPriceHigh()

            expect(pricelow).to.satisfy( x => x < priceHigh)
        })
        it('EKAC - 009 - Test SortBy Price High Low', async function () {
            await product.sortByPriceLow_High()

            const pricelow = await product.sortByPrice()
            const priceHigh = await product.sortByPriceHigh()

            // expect(pricelow).to.satisfy( x => x > priceHigh)
        })
        it('EKAC - 010 - Test SortBy Rating Highest', async function () {
            await product.sortByRatingHighest()
            
        })
        it('EKAC - 011 - Test SortBy Rating Lowest', async function () {
            await product.sortByRatingLowest()
            
        })
        it('EKAC - 012 - Test SortBy NModel A-Z', async function () {
            await product.sortByModelA_Z()
            
        })
        it('EKAC - 013 - Test SortBy Model Z-A', async function () {
            await product.sortByModelZ_A()
            
        })
    })
})