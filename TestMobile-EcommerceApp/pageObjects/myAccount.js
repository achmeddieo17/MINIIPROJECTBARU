const { remote } = require('webdriverio')

class myAccount {

    //initilization
    constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

    get myDetails() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_mydetails')}
    get myOrders() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_myorders')}
    get productReturn() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_product_return_request')}
    get trackMyOder() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_trackmyorders')}
    get NavBack() {return this.driver.$('~Navigate up')}
    get textCustDetails() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/textView_ct')}
    
    get snackBarText() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/snackbar_text')}
    get textOrderid() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/edt_tmo_orderid')}

    async details() {
        await this.myDetails.click()
    }
    async orders() {
        await this.myOrders.click()
    }
    async return() {
        await this.productReturn.click()
    }
    async tracking() {
        await this.trackMyOder.click()
    }
    async back() {
        await this.NavBack.click()
    }
    async textDetails() {
        return await this.textCustDetails.getText()
    }
    async scnackBar() {
        return await this.textNotOrder.getText()
        await this.driver.pause(3000)
    }
    async orderId() {
        return await this.textOrderid.getText()
    }
}
module.exports = myAccount
