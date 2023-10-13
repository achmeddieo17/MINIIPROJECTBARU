import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/?page_id=553')
    page.waitForSelector('.elementor-widget-container')
    page.screenshot({ path: 'screenshots/02_about_page.png' })
	sleep(3)
}