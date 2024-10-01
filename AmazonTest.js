const { Builder, By, until } = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome');


async function example() 
{
  // Set up Chrome options
  // let options = new chrome.Options();
  // options.addArguments('headless');  // Run in headless mode if you don't need a GUI

  // Initialize WebDriver
  let driver = await new Builder().forBrowser('chrome').build();

//   try {
//     // Open the URL
     await driver.get('https://www.amazon.com/'); // Replace with your URL

    // Wait for the toaster notification to appear
    await driver.wait(until.elementLocated(By.id('glow-toaster-body'))); // Increased wait time

    // Check if the toaster notification is visible
    let toaster = await driver.findElement(By.id('glow-toaster-body'));
    if (await toaster.isDisplayed()) {
      console.log('Toaster notification found.');
    }



      // Click "Dismiss" button
      try {
        let dismissButton = await driver.findElement(By.id('glow-toaster-dismiss'));
        await dismissButton.click();
        console.log('Dismiss button clicked.');
      } catch (error) {
        console.log('Dismiss button not found:', error);
      }

//       // Optionally, interact with the "Change Address" button
//       try {
//         let changeAddressButton = await driver.findElement(By.id('glow-toaster-change-address'));
//         await changeAddressButton.click();
//         console.log('Change Address button clicked.');
//       } catch (error) {
//         console.log('Change Address button not found:', error);
//       }
//     } else {
//       console.log('Toaster notification not displayed.');
//     }
    

//     // Verify homepage elements if needed
//     let pageTitle = await driver.getTitle();
//     console.log('Page title:', pageTitle);

//     await new Promise(resolve => setTimeout(resolve, 40000));

//  } 
// finally {
//     // Close the browser
//     await driver.quit();
await new Promise(resolve => setTimeout(resolve, 40000));
}
example();
