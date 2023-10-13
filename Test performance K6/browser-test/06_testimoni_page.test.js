import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/?page_id=691')
    page.waitForSelector('.elementor-heading-title.elementor-size-default')
    page.screenshot({ path: 'screenshots/06_testimoni_page.png' })
	sleep(3)
}