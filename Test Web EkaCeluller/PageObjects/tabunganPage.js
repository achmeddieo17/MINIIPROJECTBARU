const { By } = require ('selenium-webdriver')
const page = require('./page')

class Tabungan extends page {
    constructor(driver){
        super (driver)
    }
    
    BtnTabungan = By.css('.menu-item-1893')
    BtnContinueRegis = By.css('a.btn.btn-primary')

    BtnAccount = By.className('fas fa-user')
    inputEmail = By.id('input-email')
    inputPassword = By.id ('input-password')
    sumbit = By.css ('input.btn.btn-primary')

    home = By.xpath('/html/body/div[1]/div/div/ul/li[1]/a')
    riwayat = By.xpath('/html/body/div/div/div/div[2]/h6')

    BtnBuatTabungan = By.css('div.MuiBox-root.css-5j5cml')
    produkText = By.css('.css-13l1bnm')
    //page action
    async openPage(){
        await this.openUrl('/')
    }
    async btntabungan() {
        await this.driver.findElement(this.BtnTabungan).click()
    }
    async continuetext() {
        return await this.driver.findElement(this.BtnContinueRegis).getText()
    }
    async loginProcess(email, password) {
        await this.driver.findElement(this.BtnAccount).click()
        await this.driver.findElement(this.inputEmail).sendKeys(email)
        await this.driver.findElement(this.inputPassword).sendKeys(password)
        await this.driver.findElement(this.sumbit).click()
        await this.driver.findElement(this.home).click()
    }
    async Riwayat () {
        return await this.driver.findElement(this.riwayat).getText()
    }
    async btnbuattabungan1 () {
        return await this.driver.findElement(this.BtnBuatTabungan).getText()
    }
    async btnbuattabungan () {
        await this.driver.findElement(this.BtnBuatTabungan).click()
    }
    async textproduk () {
        return await this.driver.findElement(this.produkText).getText()
    }
}
module.exports = Tabungan