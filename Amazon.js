const { Builder } = require("selenium-webdriver");

async function testAmazonSearchBox()

{
    let driver = await new Builder().forBrowser('chrome').build();
   // try {
        await driver.get('https://www.amazon.com');
//         console.log('Amazon test started...');
//         let searchBox = await driver.findElement(By.id('twotabsearchtextbox'));
//         await searchBox.sendKeys('laptop', Key.RETURN);
//         await driver.sleep(5000);
//         console.log('Amazon search test completed.');
//     } finally {
//         await driver.quit();
//     }
await new Promise(resolve => setTimeout(resolve, 40000));    
     
 }
 testAmazonSearchBox();
