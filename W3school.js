//const { Builder, By, until} = require("selenium-webdriver");
//const chrome = require('selenium-webdriver/chrome');

// async function tutorialsButton () {
// //lounch browser 
//   let driver =  new Builder().forBrowser("chrome").build();


//   //navigated browser
//      await driver.get("https://www.w3schools.com");



//  // Locate the button using its id
//         let tutorialsButton = await driver.findElement(By.id('navbtn_tutorials'));

    
//          // Click the button to toggle the dropdown
//         await tutorialsButton.click();
//   //

//   // Wait for 1 minute (60000 milliseconds)
//         //await new Promise(resolve => setTimeout(resolve, 40000));    
     

// } 
const { Builder, By, until } = require('selenium-webdriver');
const { elementIsVisible, elementLocated } = until; 

(async function tutorialsButton() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Navigate to your desired webpage
        await driver.get('https://www.w3schools.com');

        // Step 1: Wait for the element to be located
        let element = await driver.wait(until.elementLocated(By.id('navbtn_tutorials')), 20000);
        
        // Step 2: Wait until the element is visible
        await driver.wait(until.elementIsVisible(element), 20000);

        // Debug info
        let isDisplayed = await element.isDisplayed();
        let isEnabled = await element.isEnabled();
        console.log("Element Displayed:", isDisplayed, "Element Enabled:", isEnabled);

        // Step 3: Scroll into view
        await driver.executeScript("arguments[0].scrollIntoView();", element);

        // Step 4: Ensure the element is clickable
        await driver.wait(until.elementIsEnabled(element), 20000);

        // Step 5: Click the element
        await element.click();

    } catch (error) {
        console.error("Error clicking the tutorials button:", error);
        
        // Check if the driver is still active
        try {
            const currentUrl = await driver.getCurrentUrl();
            console.log("Current URL before error:", currentUrl);
        } catch (err) {
            console.log("Driver may have been closed.");
        }
    } finally {
        // Ensure the driver quits properly
        await driver.quit();
    }
})();



//tutorialsButton();
