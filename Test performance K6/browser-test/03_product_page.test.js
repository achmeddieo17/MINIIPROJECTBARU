import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/index.php?route=product/category&path=-1')
    page.waitForSelector('label.input-group-addon')
    page.screenshot({ path: 'screenshots/03_product_page.png' })
	sleep(3)
}