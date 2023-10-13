const { By } = require('selenium-webdriver')
const page = require('./page')

class e2epage extends page {
    constructor(driver) {
        super(driver)
    }
    sortBy = By.id('input-sort')
    sortNameAZ = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[2]')
    sortNameZA = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[3]')
    sortPriceLowHigh = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[4]')
    sortPriceHighLow = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[5]')
    sortRatingHighest = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[6]')
    sortRatingLowest = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[7]')
    sortModelAZ = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[8]')
    sortModelZA = By.xpath('/html/body/div[2]/div/div/div[1]/div[3]/div/select/option[9]')

    listView = By.css('i.fa.fa-th-list')
    grid = By.css('i.fa.fa-th')

    async sortByNameA_Z() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortNameAZ).click()
    }
    async sortByNameZ_A() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortNameZA).click()
    }
    async sortByPriceLow_High() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortPriceLowHigh).click()
    }
    async sortByRatingHighest() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortRatingHighest).click()
    }
    async sortByRatingLowest() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortRatingLowest).click()
    }
    async sortByModelA_Z() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortModelAZ).click()
    }
    async sortByModelZ_A() {
        await this.driver.findElement(this.sortBy).click()
        await this.driver.findElement(this.sortModelZA).click()
    }
    async listview() {
        await this.driver.findElement(this.listView).click()
    }
    async Grid() {
        await this.driver.findElement(this.grid).click()
    }
}


it('Test SortBy Name A-Z', async function () {
    await e2e.sortByNameA_Z()
    
})
it('Test SortBy Name Z-A', async function () {
    await e2e.sortByNameA_Z()
    
})
it('Test SortBy Price Low High', async function () {
    await e2e.sortByPriceLow_High()
    
})
it('Test SortBy Price High Low', async function () {
    await e2e.sortByPriceLow_High()
    
})
it('Test SortBy Rating Highest', async function () {
    await e2e.sortByRatingHighest()
    
})
it('Test SortBy Rating Lowest', async function () {
    await e2e.sortByRatingLowest()
    
})
it('Test SortBy NModel A-Z', async function () {
    await e2e.sortByModelA_Z()
    
})
it('Test SortBy Model Z-A', async function () {
    await e2e.sortByModelZ_A()
    
})
it('Test List View', async function () {
    await e2e.listview()
    
})
it('Test Grid', async function () {
    await e2e.Grid()
    
})

//klik product
it('Test Klik iPhone 6 Series', async function () {
    await e2e.iphone6series()
    
})
it('Test Klik iPhone 7 Series', async function () {
    await e2e.iphone7series()
    
})
it('Test Klik iPhone 8 Series', async function () {
    await e2e.iphone8series()
    
})
it('Test Klik iPhone X Series', async function () {
    await e2e.iphoneXseries()
    
})
it('Test Klik iPhone 11 Series', async function () {
    await e2e.iphone11series()
    
})
it('Test Klik iPhone 12 Series', async function () {
    await e2e.iphone12series()
    
})
it('Test Klik iPhone 13 Series', async function () {
    await e2e.iphone13series()
    
})
it('Test Klik iPhone All Series', async function () {
    await e2e.iphoneAllseries()
    
})

it('Test Klik iPad', async function () {
    await e2e.ipad()
    
})
it('Test Klik Accessories', async function () {
    await e2e.accessories()
    
})
it('Test Klik Apple Watch', async function () {
    await e2e.appleWatch()
    
})

//e2enya 

async iphone6series () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnIphone6).click()
}
async iphone7series () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnIPhone7).click()
}
async iphone8series () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnIPhone8).click()
}
async iphoneXseries () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnIPhoneX).click()
}
async iphone11series () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnIPhone11).click()
}
async iphone12series () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnIPhone12).click()
}
async iphone13series () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnIphone13).click()
}
async iphoneAllseries () {
    await this.driver.findElement(this.btnIphone).click()
    await this.driver.findElement(this.btnShowAlliPhone).click()
}
async ipad () {
    await this.driver.findElement(this.btniPad).click()
}

//elementnya
btnIphone6 = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[1]/a')
    btnIPhone7 = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[2]/a')
    btnIPhone8 = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[3]/a')
    btnIPhoneX = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[4]/a')
    btnIPhone11 = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[5]/a')
    btnIPhone12 = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[6]/a')
    btnIphone13 = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[7]/a')
    btnShowAlliPhone = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[1]/ul/li[8]/a')

    btnWatch = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[4]/a')
    btnAccessories = By.xpath('/html/body/header/nav/div[1]/div/div[2]/ul/li[5]/a')
    btnIphone = By.css('a.dropdown-toggle.xxxd')
    btniPad = By.xpath('//*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a')