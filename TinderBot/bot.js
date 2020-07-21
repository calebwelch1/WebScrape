const puppeteer = require("puppeteer");
// remember async syntax (async()=>{})()
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  //opens new page
  const page = await browser.newPage();
  // waits then goes to tinder.com
  await page.goto("https://tinder.com");
  // fix window size
  await page._client.send("Emulation.clearDeviceMetricsOverride");
  // select facebook login button
  await page.waitForXPath(
    "/html/body/div[1]/div/div[1]/div/div/main/div/div[2]/div[2]/div/div/span/div[2]/button"
  );
  // $selector select xpath
  const [fbLogin] = await page.$x(
    "/html/body/div[1]/div/div[1]/div/div/main/div/div[2]/div[2]/div/div/span/div[2]/button"
  );
  //click it
  fbLogin.click();

  // clicking login opens a new browser with facebook login credentials
  // to handle new pages
  // once new target created. we pass target to promise
  const newPagePromise = new Promise((x) => {
    browser.once("targetcreated", (target) => x(target.page()));
  });
  // wait til the new page arrives
  const fbPopup = await newPagePromise;
  // click email input
  fbPopup.click("#email");
  // type in the email
  fbPopup.keyboard.type("calebwelch.design@gmail.com");
  
  .keyboard.type('calebwelchdesign')
})();
