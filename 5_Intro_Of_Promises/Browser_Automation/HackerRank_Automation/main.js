const { DEFAULT_VIEWPORT } = require("puppeteer");
const puppeteer = require("puppeteer-extra");
const CodeObj = require('./Code');

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
let HackerRankLoginURL = "https://www.hackerrank.com/auth/login";
let username = "itssurajksharma";
let password = "Suraj@321"; 

let cpage;
console.log("Before");

const browseropenpromise = puppeteer.launch({
     headless: false ,
     defaultViewport:null
 });

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
    let gotopromise = cpage.goto(HackerRankLoginURL);
    return gotopromise;
  }).then(function () {
    //type any element on that page -> selector
    // Add human-like typing delay
    let usernameEntered = cpage.type('input[name="username"]', username, { delay: 50 });
    return usernameEntered;
  }).then(function(){
    let passwordEntered = cpage.type('input[name="password"]', password, { delay: 50 });
    return passwordEntered;
  }).then(function () {
    return cpage.click('button[type="submit"]');
  }).then(function(){
    let clickonAlgoSection = waitAndClick('.topic-name[data-automation="algorithms"]',cpage)
    return clickonAlgoSection;
  }).then(function() {
    return new Promise(resolve => setTimeout(resolve, 1000)); 
  }).then(function() {
      return cpage.$$('button.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
  }).then(function(questionsArray) {
      console.log("Number of question buttons found:", questionsArray.length);
      let questionWillBeSolved = questionSolver(questionsArray[0],CodeObj.answersArr[0]);
      return questionWillBeSolved;
  }).catch(function(err) {
    console.error("Error occurred:", err);
  });

  function waitAndClick(selector, page) 
  {
    return new Promise(function(resolve, reject) {
      let waitForModelPromise = page.waitForSelector(selector);
      waitForModelPromise.then(function() {
        console.log("Element found: " + selector);
        let clickModel = page.click(selector, { force: true });
        return clickModel;
      }).then(function() {
        resolve(); // ✅ This is what was missing!
      }).catch(function(err) {
        reject(err); // Also a good practice
      });
    });
  }
  
  function questionSolver(question,answer) {
    return new Promise(function(resolve, reject) {
      if (!question) 
      {
        console.error("❌ Question element is undefined");
        return reject("Question is undefined");
      }

      let questionWillBeClicked = question.click();
          questionWillBeClicked.then(function() {
          let TextAreaClickPromise = waitAndClick('.monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs', cpage);
          return TextAreaClickPromise;
      }).then(function() {
        return waitAndClick('.checkbox-input', cpage); // ✅ removed `.click` here — waitAndClick is already handling the click
      }).then(function() {
        return cpage.waitForSelector('textarea.custominput');
      }).then(function(){
         return cpage.type('textarea.custominput',answer,{delay:10});
      }).then(function(){
          let Ctr_DownPress = cpage.keyboard.down("Control");
          return Ctr_DownPress;
      }).then(function(){
         let A_press = cpage.keyboard.press('A',{delay:100});
         return A_press;
      }).then(function(){
        let X_press = cpage.keyboard.press('X',{delay:100});
        return X_press;
     }).then(function(){
      let Ctr_UPPress = cpage.keyboard.up("Control");
      return Ctr_UPPress;
     }).then(function(){
       let TextAreaClickPromise = waitAndClick('.monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs', cpage);
       return TextAreaClickPromise;
     }).then(function(){
      let Ctr_DownPress = cpage.keyboard.down("Control");
      return Ctr_DownPress;
     }).then(function(){
      let A_press = cpage.keyboard.press('A',{delay:100});
      return A_press;
   }).then(function(){
    let A_press = cpage.keyboard.press('V',{delay:100});
    return A_press;
   }).then(function(){
     return waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', cpage);
   }).then(function() {
        resolve(); // ✅ resolved after all actions done
      }).catch(function(err) {
        reject(err); // ❌ reject if anything fails
      });
    });
  }
  