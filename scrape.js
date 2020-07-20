const puppeteer = require("puppeteer");

async function scrapeProduct(url) {
  //need to await the data
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  // copy xpath of element we are scraping, in this case image of book on amazon
  // saying page.search for element by x path...
  //[el] pulls out first item of the array into a variable called el (object destructoring)
  const [el] = await page.$x('//*[@id="imgBlkFront"]');
  const src = await el.getProperty("src");
  // get as string
  const srcTxt = await src.jsonValue();
  console.log(srcTxt);
  //so it isn't always running
  browser.close();
}

scrapeProduct(
  "https://www.amazon.com/Desperate-Deception-British-Operations-1939-44/dp/1574882236"
);
