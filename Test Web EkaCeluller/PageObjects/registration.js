const { By } = require ('selenium-webdriver')
const page = require('./page')

class registration extends page {
    constructor(driver){
        super (driver)
    }

    // element locator
    BtnAccount = By.className('fas fa-user') 
    BtnContinue = By.className('btn btn-primary')
    fisrtName = By.id('input-firstname')
    lastName = By.id('input-lastname')
    email = By.id('input-email')
    telephone = By.id('input-telephone')
    radioMale = By.className('radio')
    birthDate = By.id ('input-custom-field2')
    password = By.id('input-password')
    confPassword = By.id('input-confirm')
    checkBox = By.name('agree')
    continue = By.className('btn btn-primary')

    errorFirstName = By.className('text-danger')
    errorLastName = By.className('text-danger')


    //page action
    async openPage(){
        await this.openUrl('/')
    }
    /**
     * 
     * @param {string} firstname 
     * @param {string} lastname 
     * @param {string} email 
     * @param {string} telephone 
     * @param {number} birthdate 
     * @param {string} password 
     * @param {string} confirmpassword 
     */
    async RegisProcess(firstname,lastname
        ,email) {
            await this.driver.findElement(this.BtnAccount).click()
            await this.driver.findElement(this.BtnContinue).click()
            await this.driver.findElement(this.fisrtName).sendKeys(firstname)
            await this.driver.findElement(this.lastName).sendKeys(this.lastname)
            await this.driver.findElement(this.email).sendKeys(this.email)
            // await this.driver.findElement(this.telephone).sendKeys(this.telephone)
            // await this.driver.findElement(this.radioMale).click()
            // await this.driver.findElement(this.birthDate).sendKeys(this.birthdate)
            // await this.driver.findElement(this.password).sendKeys(this.password)
            // await this.driver.findElement(this.confPassword).sendKeys(this.confirmpassword)
            await this.driver.findElement(this.checkBox).click()
            await this.driver.findElement(this.continue).click()
        }
    async errorMessage() {
        await this.driver.findElement(this.errorFirstName).getText()
        await this.driver.findElement(this.errorLastName).getText()
    }
}
module.exports = registration