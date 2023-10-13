import loginPage from './protocol-test/01_login_page.test.js'
import myAccount from './protocol-test/02_MyAccount_Page.test.js'
import productPage from './protocol-test/03_product_page.test.js'
import produckDetailPage from './protocol-test/04_detailProduct_page.test.js'
import checkoutPage from './protocol-test/05_checkout_page.test.js'
import testimoniPage from './protocol-test/06_testimoni_page.test.js'
import loyaltiPage from './protocol-test/07_loyalti_page.test.js'
import contactPage from './protocol-test/08_contact_page.test.js'
import kreditPage from './protocol-test/09_kredit_page.test.js'
import aboutPage from './protocol-test/10_about_page.test.js'

import login_browser from './browser-test/01_login_page.test.js'
import about_browser from './browser-test/02_about_page.test.js'
import product_browser from './browser-test/03_product_page.test.js'
import detailProduct_browser from './browser-test/04_detailProduct_page.test.js'
import checkout_browser from './browser-test/05_checkout_page.test.js'
import testimoni_browser from './browser-test/06_testimoni_page.test.js'
import loyalti_browser from './browser-test/07_loyalti_page.test.js'
import contact_browser from './browser-test/08_contact.test.js'
import kredit_browser from './browser-test/09_kredit_page.test.js'
import myAccount_browser from './browser-test/10_myAccount.test.js'

import thresholds from './config/thresholds.js'
import smoke_test from './config/smoke.js'
import average_load_test from './config/average.js'
import breakpoint_test from './config/breakpoint.js'
import soak_test from './config/soak.js'
import spike_test from './config/spike.js'
import stress_test from './config/stress.js'

import { browser } from 'k6/experimental/browser'


const scenarioList = {
	smoke: smoke_test,
	average: average_load_test,
	breakpoint: breakpoint_test,
	soak: soak_test,
	spike: spike_test,
	stress: stress_test,
}

export const options = {
    thresholds,
    scenarios: {
		protocolBased: scenarioList[__ENV.SCENARIO] || smoke_test,
		browserBased: {
			exec: 'browserBasedScript',
			executor: 'shared-iterations',
			options: {
				browser: {
					type: 'chromium'
				}
			}
		}
	}
}
export async  function browserBasedScript() {
    const page = browser.newPage()
    try {
        // await testimoni_browser(page)
        // await myAccount_browser(page)

        await loyalti_browser(page)
        await login_browser(page)
        await about_browser(page)
        await product_browser(page)
        await detailProduct_browser(page)
        await checkout_browser(page)
        await contact_browser(page)
        await kredit_browser(page)

    }finally {
        page.close()
    }
}

export function protocolBasedScript(){    
    // testimoniPage()
    loginPage()
    myAccount() 
    productPage()
    produckDetailPage()
    checkoutPage()
    loyaltiPage()
    contactPage()
    kreditPage()
    aboutPage()
}