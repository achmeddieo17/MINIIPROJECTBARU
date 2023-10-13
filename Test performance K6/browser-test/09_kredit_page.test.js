import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/?p=2403')
    page.waitForSelector('.elementor-heading-title.elementor-size-default')
    page.screenshot({ path: 'screenshots/09_kredit_page.png' })
	sleep(3)
}