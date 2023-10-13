import { sleep } from 'k6'

export default async function (page){ 
    await page.goto('https://ekaceluller.com/index.php?route=product/product&path=-1&product_id=410')
    page.waitForSelector('i.fa.fa-heart')
    page.screenshot({ path: 'screenshots/04_DetailProduct_page.png' })
	sleep(3)
}