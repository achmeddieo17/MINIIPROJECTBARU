const { remote } = require('webdriverio')

class e2ePage {

    //initilization
    constructor(driver) {
        /** @type {WebdriverIO.Browser} */
        this.driver = driver
    }
    get skip() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_skip')}
    get textEcommerceApp() { return this.driver.$('android.widget.TextView') }
    get back1() { return this.driver.$('~Navigate up') }
    get back2() { return this.driver.$('~App') }
    get Groceries() {
        return this.driver
            .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView')
    }
    get vegetables() {
        return this.driver
            .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView')
    }
    get potato() {
        return this.driver
            .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView')
    }
    get fruitVegan() {
        return this.driver
            .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.RelativeLayout/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout[2]/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.ImageView')
    }
    get textQuantity() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/textView9') }
    get sizePotato() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/txt_product_size') }
    get addQuantity() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_qnt_increment') }
    get minusQuantity() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_qnt_decrement') }
    get sizePotato2() {
        return this.driver
            .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[2]/android.widget.TextView')
    }
    get addtocart() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/pv_fab_addtocart') }
    get cart() { return this.driver.$('~Cart') }
    get textRemove() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/shopingcart_product_button_remove') }
    get checkout() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/sc_btn_checkout') }
    get CustDetails() {
        return this.driver
            .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextView')
    }
    get inputAddress() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/co_address') }
    get inputLandmark() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/co_landmark') }
    get pincode() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/co_pincode') }
    get city() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/co_city') }
    get state() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/co_state') }
    get country() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/co_country') }
    get getlocation() { return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_getlocation') }
    get BtnDeny() { return this.driver.$('com.android.permissioncontroller:id/permission_deny_button ') }
    get finalCheckout() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/co_btn_paymoney')}
    get textpayment() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/alertTitle')}
    get cod() {return this.driver
        .$('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]')}
    get vieworder() {return this.driver.$('id=com.studiobluelime.ecommerceapp:id/btn_op')}


    async btnskip() {
        await this.skip.click()
    }
    async textecommerce() {
        return await this.textEcommerceApp.getText()
    }
    async backhome1() {
        await this.back1.click()
        await this.back2.click()
    }
    async Potato() {
        await this.driver.touchPerform([
            { action: 'press', options: { x: 317, y: 500 } },
            { action: 'wait', options: { ms: 300 } },
            { action: 'moveTo', options: { x: 300, y: 220 } },
            { action: 'release' },
        ])
        await this.Groceries.click()
    }
    async klikFruitVegan() {
        await this.fruitVegan.click()
    }
    async klikvegentable() {
        await this.vegetables.click()
    }
    async klikpotato() {
        await this.potato.click()
    }
    async quantity() {
        return await this.textQuantity.getText()
    }
    async click1Kg() {
        return await (await this.sizePotato).click()
    }
    async click2kg() {
        return (await this.sizePotato2).click()
    }
    async quantityAdd() {
        return (await this.addQuantity).doubleClick()
    }
    async quantityMinus() {
        return (await this.minusQuantity).click()
    }
    async Addcart() {
        return (await this.addtocart).click()
    }
    async Cart() {
        return (await this.cart).click()
    }
    async removeText() {
        return await this.textRemove.getText()
    }
    async Checkout() {
        await this.checkout.click()
    }
    async textCustDetails() {
        return await this.CustDetails.getText()
    }
    async selectAddress(address, landmark, pincode, city, state, country) {
        await this.driver.touchPerform([
            { action: 'press', options: { x: 300, y: 500 } },
            { action: 'wait', options: { ms: 300 } },
            { action: 'moveTo', options: { x: 248, y: 230 } },
            { action: 'release' },
        ])
        await this.inputAddress.setValue(address)
        await this.inputLandmark.setValue(landmark)
        await this.pincode.setValue(pincode)
        await this.city.setValue(city)
        await this.state.setValue(state)
        await this.country.setValue(country)
        
        await this.driver.touchPerform([
            { action: 'press', options: { x: 70, y: 643 } },
            { action: 'wait', options: { ms: 200 } },
            { action: 'moveTo', options: { x: 70, y: 200 } },
            { action: 'release' },
        ])
        await this.finalCheckout.click()
    }
    async paymentmethod() {
        return await this.textpayment.getText()
    }
    async selectPayment() {
        await this.cod.click()
    }
    async orderView() {
        return await this.vieworder.getText()
    }
    async clickOrderView() {
        await this.vieworder.click()
    }
}
module.exports = e2ePage
