const { remote } = require('webdriverio')

class LoginEcommerce {

    //initilization
    constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

    get BtnAdd() {return this.driver.$('~App')}
    get MyAccount() {return this.driver
        .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.drawerlayout.widget.DrawerLayout/android.widget.FrameLayout/androidx.recyclerview.widget.RecyclerView/androidx.appcompat.widget.LinearLayoutCompat[4]/android.widget.CheckedTextView')}
    get email() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/et_login_username')}
    get password() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/et_login_password')}
    get BtnLogin() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_login')}

    get textPassword() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/snackbar_text')}
    
    get myDetails() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_mydetails')}

    async clickBurger() {
        await this.BtnAdd.click()
    }
    async clickAccount() {
        (await this.MyAccount).click()
    }
    async inputLogin(email,password) {
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.BtnLogin.click()
    }
    async errPassword() {
        return (await this.textPassword).getText()
    }
    async Mydetails() {
        return (await this.myDetails).getText()
    }
}
module.exports = LoginEcommerce