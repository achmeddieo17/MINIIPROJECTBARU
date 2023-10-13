import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/?page_id=565')
    page.waitForSelector('.menu-item-670')
    page.screenshot({ path: 'screenshots/07_loyalti_page.png' })
	sleep(3)
}