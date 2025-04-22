const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

let cpage; 
console.log("Before");

const browseropenpromise = puppeteer.launch({ headless: false });

browseropenpromise
  .then(function (browser) {
    const pagesArrPromise = browser.pages();
    return pagesArrPromise;
  }).then(function (browserPages) {
    cpage = browserPages[0];
    // Set a real user-agent to reduce bot detection
    return cpage.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
    );
  }).then(function () {
    let gotopromise = cpage.goto("https://www.google.com");
    return gotopromise;
  }).then(function () {
    // waiting for the element to appear on the page
    let elementWaitpromise = cpage.waitForSelector("textarea[name='q']", { visible: true });
    return elementWaitpromise;
  }).then(function () {
    //reached to Google Home Page
    //type any element on that page -> selector
    // Add human-like typing delay
    let keysWillBeSendPromise = cpage.type("textarea[name='q']", "hsworks patna", { delay: 100 });
    return keysWillBeSendPromise;
  }).then(function () {
    // page.waitForSelector to type special character
    let enterWillBePressed = cpage.keyboard.press("Enter");
    return enterWillBePressed;
  }).then(function () {
    let elementWaitPromise = cpage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
    return elementWaitPromise;
  })
  .then(function () {
    //mouse click
    cpage.click("h3.LC20lb.MBeuO.DKV0Md");
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("After");
