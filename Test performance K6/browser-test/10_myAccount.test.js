import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/index.php?route=account/account')
    page.waitForSelector('i.fa.fa-sign-out')
    page.screenshot({ path: 'screenshots/10_myAccount_page.png' })
	sleep(3)
}
