const { DEFAULT_VIEWPORT, Page } = require("puppeteer");
const puppeteer = require("puppeteer-extra");
const CodeObj = require('./Code');

const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
let HackerRankLoginURL = "https://www.hackerrank.com/auth/login";
let username = "itssurajksharma";
let password = "Suraj@321"; 

const wait = {
    sleep: ms => new Promise(resolve => setTimeout(resolve, ms))
};

// IIFI Function Declare
(async function(){
   try
    {
        let browserInstance = await puppeteer.launch({
            headless : false,
            args :[`--start-maximized`],
            deafultViewport:null
        })

        let Page = await browserInstance.newPage();
        await Page.goto(HackerRankLoginURL);
        await Page.type('input[name="username"]', username, { delay: 50 });
        await Page.type('input[name="password"]', password, { delay: 50 });
        await Page.click('button[type="submit"]',{delay:50});
        await waitAndClick('.topic-name[data-automation="algorithms"]',Page);
        await wait.sleep(2000);
        await waitAndClick('input[value="warmup"]',Page)
        let AllChalengessArr = await Page.$$('button.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50});
        console.log(AllChalengessArr.length);
        await questionSolver(Page,AllChalengessArr[0],CodeObj.answersArr[0]);

    }
   catch(err)
    {
        console.error("Error occurred:", err);
    }
}
)();

async function waitAndClick(selector,cpage)
{
    await cpage.waitForSelector(selector);
    let selectorClicked = cpage.click(selector);
    return selectorClicked;
}

async function questionSolver(cpage, question, answer) {
    if (!question) {
        console.error("❌ Question element is undefined");
        throw new Error("Question is undefined");
    }

    await question.click();
    await waitAndClick('.monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs', cpage);
    await waitAndClick('.checkbox-input', cpage);
    await cpage.waitForSelector('textarea.custominput'); // ✅ fixed: added `await`
    await cpage.type('textarea.custominput', answer, { delay: 10 });

    await cpage.keyboard.down("Control");
    await cpage.keyboard.press('A', { delay: 100 });
    await cpage.keyboard.press('X', { delay: 100 });
    await cpage.keyboard.up("Control");

    await waitAndClick('.monaco-editor.no-user-select.standalone.showUnused.showDeprecated.vs', cpage);

    await cpage.keyboard.down("Control");
    await cpage.keyboard.press('A', { delay: 100 });
    await cpage.keyboard.press('V', { delay: 100 });
    await cpage.keyboard.up("Control");

    await waitAndClick('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', cpage);
}
