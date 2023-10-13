const { By } = require ('selenium-webdriver')
const page = require('./page')

class loginPage extends page {
    constructor(driver){
        super (driver)
    }

    // element locator
    BtnAccount = By.className('fas fa-user')
    inputEmail = By.id('input-email')
    inputPassword = By.id ('input-password')
    sumbit = By.css ('input.btn.btn-primary')
    logout = By.css ('.col-sm-4 col-xs-3')
    errMessage = By.css('.alert.alert-danger.alert-dismissible')
    myaccount= By.css('.customer-account')

    
    //page action
    async openPage(){
        await this.openUrl('/')
    }

    async loginProcess(email, password) {
        await this.driver.findElement(this.BtnAccount).click()
        await this.driver.findElement(this.inputEmail).sendKeys(email)
        await this.driver.findElement(this.inputPassword).sendKeys(password)
        await this.driver.findElement(this.sumbit).click()
    }
    async errmessage() {
        return await this.driver.findElement(this.errMessage).getText()
    }
    async textMyaccount() {
        return await this.driver.findElement(this.myaccount).getText()
    }
    async Logout () {
        await this.driver.findElement(this.logout).click()
    }
}

module.exports = loginPage