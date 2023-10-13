const { By } = require ('selenium-webdriver')
const page = require('./page')

class e2epage extends page {
    constructor(driver){
        super (driver)
    }

    // element locator
    BtnAccount = By.className('fas fa-user')
    inputEmail = By.id('input-email')
    inputPassword = By.id ('input-password')
    sumbit = By.css ('input.btn.btn-primary')
    Account = By.xpath ('/html/body/footer/div/div/div[3]/ul/li[1]/a')
    myaccount= By.css('.customer-account')
    logout = By.css('i.fa.fa-sign-out')
    
    
    btnMacbook = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[3]/a')
    textMacbook = By.xpath('/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div/h4/a')
    priceText = By.xpath('/html/body/div[2]/div/div/div/div[2]/ul[2]/li/h2/span')

    selectColour = By.id ('input-option359')
    colourGold = By.xpath('/html/body/div[2]/div/div/div/div[2]/div[2]/div[1]/select/option[2]')
    inputquantity = By.id('input-quantity')

    addtocart = By.css('.btn.btn-primary.btn-lg.btn-block')
    success = By.css('.alert.alert-success alert-dismissible')

    yourOrder = By.xpath('/html/body/div[1]/div/div/div/a[2]')
    textshopCart = By.xpath('/html/body/div[1]/div/div/ul/li[2]/a')

    shippingTaxes = By.xpath('/html/body/div[2]/div/div/div[1]/div[2]/div[1]/h4/a/i')
    provinsi = By.id('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div/div/div[1]/div/select/option[14]')

    checkout = By.css('div.pull-right')
    checkoutText = By.xpath('/html/body/div[2]/div/div/h1')

    continueStepBill2 = By.id('button-payment-address')
    continueaddress = By.id('button-shipping-address')
    continueShipMethod = By.id('button-shipping-method')
    continuepayment = By.id('button-payment-method')
    selectpayment = By.xpath('/html/body/div[2]/div/div/div/div[5]/div[2]/div/div[3]/label/input')
    confirmOrder = By.id('button-confirm')

    textDeliv2 = By.css('#collapse-payment-address')
    textDeliv3 = By.css('#collapse-shipping-address')
    textDeliv = By.css('#collapse-shipping-method')
    textDeliv5 = By.css('#collapse-payment-method')
    textDeliv6 = By.css('#collapse-checkout-confirm')

    
    //page action
    async openPage(){
        await this.openUrl('/')
    }
    async delivtext2 () {
        return await this.driver.findElement(this.textDeliv2).getText()
    }
    async delivtext3 () {
        return await this.driver.findElement(this.textDeliv3).getText()
    }
    async delivtext5 () {
        return await this.driver.findElement(this.textDeliv5).getText()
    }
    async delivtext6 () {
        return await this.driver.findElement(this.textDeliv6).getText()
    }
    async delivtext () {
        return await this.driver.findElement(this.textDeliv).getText()
    }

    async loginProcess(email, password) {
        await this.driver.findElement(this.BtnAccount).click()
        await this.driver.findElement(this.inputEmail).sendKeys(email)
        await this.driver.findElement(this.inputPassword).sendKeys(password)
        await this.driver.findElement(this.sumbit).click()
    }
   
    async macbook () {
        await this.driver.findElement(this.btnMacbook).click()
    }
    async appleWatch () {
        await this.driver.findElement(this.btnWatch).click()
    }
    async accessories () {
        await this.driver.findElement(this.btnAccessories).click()
    }
    async textMyaccount() {
        return await this.driver.findElement(this.myaccount).getText()
    }
    async textmacbook() {
        return await this.driver.findElement(this.textMacbook).getText()
    }
    async clickMacbook () {
        await this.driver.findElement(this.textMacbook).click()
    }
    async price () {
        return await this.driver.findElement(this.priceText).getText()
    }
    async selectcolourandstorage (quantity) {
        const js_code = "arguments[0].scrollIntoView();";
        const selectColour = await this.driver.findElement(this.selectColour);
        await this.driver.executeScript(js_code, selectColour);
        await this.driver.findElement(this.selectColour).click()
        await this.driver.findElement(this.colourGold).click()
        // await this.driver.findElement(this.inputquantity).sendKeys(quantity)
        await this.driver.findElement(this.addtocart).click()
    }
    async yourorder () {
        await this.driver.findElement(this.yourOrder).click()
    }
    async yourorderText () {
        return await this.driver.findElement(this.yourOrder).getText()
    }
    async shopcartText() {
        return await this.driver.findElement(this.textshopCart).getText()
    }
    async checkOut() {
        const js_code = "arguments[0].scrollIntoView();";
        const checkout = await this.driver.findElement(this.checkout);
        await this.driver.executeScript(js_code, checkout);
        await this.driver.findElement(this.checkout).click()
        
    }
    async textCheckout() {
        return await this.driver.findElement(this.checkoutText).getText()
    }
    async continueBill2() {
        await this.driver.findElement(this.continueStepBill2).click()
    }
    async addressContinue() {
        await this.driver.findElement(this.continueaddress).click()
    }
    async continueShippingMethod() {
        await this.driver.findElement(this.continueShipMethod).click()
    }
    async selectPayment() {
        await this.driver.findElement(this.selectpayment).click()
    }
    async continuePayment() {
        await this.driver.findElement(this.continuepayment).click()
    }
    async account () {
        const js_code = "arguments[0].scrollIntoView();";
        const confirm = await this.driver.findElement(this.confirmOrder);
        await this.driver.executeScript(js_code, confirm);
        await this.driver.findElement(this.Account).click()
    }
    async Logout() {
        await this.driver.findElement(this.logout).click()
    }
    
    
}

module.exports = e2epage