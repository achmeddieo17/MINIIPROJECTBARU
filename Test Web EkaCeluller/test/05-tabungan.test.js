const { expect } = require('chai');
const { By, WebDriver } = require('selenium-webdriver')
const setupDriver = require('../utils/setupDriver')
const Tabungan = require('../PageObjects/tabunganPage')

describe('EKAC - Tabungan', function () {
    /** @type {WebDriver} */ let driver
    /** @type {Tabungan} */ let tabungan

    before(async function () {
        driver = await setupDriver()
        tabungan = new Tabungan(driver)
    })
    after(async function () {
        await driver.close()
    })
    describe('Tabungan Negative Test', function () {

        it('EKAC - 001 - Klik Tabungan sebelum login', async function () {
            await tabungan.openUrl()
            await tabungan.btntabungan()
            await driver.sleep(3000)

            const test = await tabungan.continuetext()
            expect(test).to.equal('Continue')
        })
    })
    describe('Tabungan Positif Test', function () {
        it('EKAC - 002 - Klik Tabungan setelah login', async function (){
            await tabungan.openUrl()
            await tabungan.loginProcess('achmeddieom@gmail.com','dieo123456')
            await tabungan.btntabungan()
            await driver.sleep(3000)

            const test = await tabungan.btnbuattabungan1()
            expect(test).to.equal('Buat Tabungan')
        })
        it('EKAC - 002 - Klik Buat Tabungan', async function () {
            await tabungan.btnbuattabungan()
            await driver.sleep(3000)

            const test = await tabungan.textproduk()
            expect(test).to.equal('Produk')
        })
    })
})