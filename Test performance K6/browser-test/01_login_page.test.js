import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/index.php?route=account/login')
    page.waitForSelector('a.btn.btn-primary')
    page.screenshot({ path: 'screenshots/01_login_page.png' })
	sleep(3)
}
