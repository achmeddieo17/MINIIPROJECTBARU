import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/?page_id=685')
    page.waitForSelector('.menu-item-690')
    page.screenshot({ path: 'screenshots/08_contact_page.png' })
	sleep(3)
}