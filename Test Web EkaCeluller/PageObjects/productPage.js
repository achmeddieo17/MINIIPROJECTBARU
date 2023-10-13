const { By, until } = require ('selenium-webdriver')
const page = require('./page')

class products extends page {
    constructor(driver){
        super (driver)
    }

    BtnProduct = By.css ('.menu-item-666')
    BtnIphone = By.className ('elementor-sub-item has-submenu')
    BtnIphone12 = By.css('a.elementor-sub-item')
    testscroll = By.css('.col-sm-6.text-right')
    compare = By.id('compare-total')

    btniPad = By.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')
    btnMacbook = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[3]/a')
    btnWatch = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[4]/a')
    btnAccessories = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[5]/a')

    sortBy = By.id('input-sort')
    sortNameAZ = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[2]')
    sortNameZA = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[3]')
    sortPriceLowHigh = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[4]')
    sortPriceHighLow = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[5]')
    sortRatingHighest = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[6]')
    sortRatingLowest = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[7]')
    sortModelAZ = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[8]')
    sortModelZA = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[9]')

    sortNameA = By.xpath('/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div/h4/a')
    sortNameB = By.xpath('/html/body/div[2]/div/div/div[2]/div[2]/div/div[2]/div/h4/a')

    ByPriceLow = By.xpath('/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div/p')
    ByPriceHigh = By.xpath('/html/body/div[2]/div/div/div[2]/div[2]/div/div[2]/div/p')

    macbookbtn = By.css('.menu-item-661')
    klikmacbook = By.xpath('/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div/h4/a')
    priceText = By.css('span.price-old-live')
    whislist = By.css('i.fa.fa-heart')
    successTextNoLogin = By.css('div.alert.alert-success.alert-dismissible')
    comparethisproduct = By.css('i.fa.fa-exchange')
    successTextCompare = By.xpath('/html/div/text()[1]')

    priceInput = By.css('#input-quantity"]') // tidak bisa elementnya 
    colorandstorage = By.css('select[name="option[359]"')
    gold = By.css('option[value="941"]')
    addtocart = By.css('.btn.btn-primary.btn-lg.btn-block')

    tabreview = By.xpath('/html/body/div[2]/div/div/div/div[1]/ul[2]/li[2]/a')
    textwriteReview = By.xpath ('/html/body/div[2]/div/div/div/div[1]/div/div[2]/form/h2')
    inputNameReview = By.css('#input-name')
    inputReview = By.css('#input-review')
    SuccessReview = By.css('/html/body/div[2]/div/div/div/div[1]/div/div[2]/form/div[2]/text()')
    ratingReview = By.css('input[value="4"]')
    btnReview = By.css('button#button-review')
    warnReview = By.css('div.alert.alert-danger.alert-dismissible')
    // button[data-original-title="Add to Wish List"]

    //page action
    async openPage(){
        await this.openUrl('/')
    }
    async reviewSuccess() {
        // const textalert = await this.driver.wait(until.elementLocated(this.succ))
        // return await textalert.getText()
        return await this.driver.findElement(this.SuccessReview).getText()
    }
    async reviewWarning() {
        const textalert = await this.driver.wait(until.elementLocated(this.warnReview))
        return await textalert.getText()
        // return await this.driver.findElement(this.warnReview).getText()
    }
    async reviewInput(name,review) {
        await this.driver.findElement(this.inputNameReview).sendKeys(name)
        await this.driver.findElement(this.inputReview).sendKeys(review)
        await this.driver.findElement(this.ratingReview).click()
        await this.driver.findElement(this.btnReview).click()
    }
    async clickReview() {
        const js_code = "arguments[0].scrollIntoView();";
        const tabreview = await this.driver.findElement(this.tabreview);
        await this.driver.executeScript(js_code, tabreview);
        await this.driver.findElement(this.tabreview).click()
    }
    async textReview() {
        return await this.driver.findElement(this.textwriteReview).getText()
    }

    async addcart() {
        await this.driver.findElement(this.addtocart).click()
    }
    async selectColorandStorage(input) {
        const js_code = "arguments[0].scrollIntoView();";
        const testscroll = await this.driver.findElement(this.colorandstorage);
        await this.driver.executeScript(js_code, testscroll);

        await this.driver.findElement(this.colorandstorage).click()
        await this.driver.findElement(this.gold).click()
    }
    async inputpricesimulasi(input){
        await this.driver.findElement(this.priceInput).clear()
        await this.driver.findElement(this.priceInput).sendKeys(input)
    }
    async compareProduct () {
        await this.driver.findElement(this.comparethisproduct).click()
    }
    async textCompare() {
        return this.driver.findElement(this.successTextCompare).getText()
    }
    async macbook() {
        await this.driver.findElement(this.BtnProduct).click()
        await this.driver.findElement(this.macbookbtn).click()
    }
    async klikMacbook() {
        await this.driver.findElement(this.klikmacbook).click()
    }
    async textPrice() {
        return await this.driver.findElement(this.priceText).getText()
    }
    async whisList() {
        await this.driver.findElement(this.whislist).click()
    }
    async textSuccess() {
        // const textalert =  await this.driver.findElement(this.successTextNoLogin).getText()
        const textalert = await this.driver.wait(until.elementLocated(this.successTextNoLogin))
        return await textalert.getText()
    }
    async product() {
        await this.driver.findElement(this.BtnProduct).click()
        await this.driver.sleep(1000)
        await this.driver.findElement(this.BtnIphone).click()
        await this.driver.sleep(3000)
        await this.driver.findElement(this.BtnIphone12).click()
        // const js_code = "arguments[0].scrollIntoView();";
        // const testscroll = await this.driver.findElement(this.testscroll);
        // await this.driver.executeScript(js_code, testscroll);
    }
    async product1(){
        await this.driver.findElement(this.btniPad).click()
    }
    async product2(){
        await this.driver.findElement(this.btnMacbook).click()
    }
    async product3(){
        await this.driver.findElement(this.btnWatch).click()
    }
    async product4(){
        await this.driver.findElement(this.btnAccessories).click()
    }
    async compareText(){
        return await this.driver.findElement(this.compare).getText()
    }
    async sortByNameA_Z() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortNameAZ).click()
    }
    async sortByNameZ_A() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortNameZA).click()
    }
    async sortByPriceLow_High() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortPriceLowHigh).click()
    }
    async sortByRatingHighest() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortRatingHighest).click()
    }
    async sortByRatingLowest() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortRatingLowest).click()
    }
    async sortByModelA_Z() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortModelAZ).click()
    }
    async sortByModelZ_A() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortModelZA).click()
    }
    async sortbyNameA () {
        return await this.driver.findElement(this.sortNameA).getText()
    }
    async sortbyNameB () {
        return await this.driver.findElement(this.sortNameB).getText()
    }
    async sortByPrice() {
        return await this.driver.findElement(this.ByPriceLow).getText()
    }
    async sortByPriceHigh() {
        return await this.driver.findElement(this.ByPriceHigh).getText()
    }
}
module.exports = products