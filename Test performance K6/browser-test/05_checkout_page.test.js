import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/index.php?route=checkout/cart')
    page.waitForSelector('.col-sm-12')
    page.screenshot({ path: 'screenshots/05_checkout_page.png' })
	sleep(3)
}