# HackerRank Automation

This project automates the process of solving coding challenges on HackerRank using Puppeteer and Monaco Editor manipulation.

## Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager)

## Setup Instructions

1. **Clone the repository**:
   If you haven’t already, clone the repository to your local machine:

   ```bash
   git clone https://your-repository-url.git
   cd your-repository-folder
2. **Install dependencies: Install all required packages using npm:**
   ```bash
   npm install
3. **Setup the credentials: In the main.js file, replace the following with your HackerRank credentials:**
   ```bash
   let username = "your-username";
   let password = "your-password";
4. **Set Up Clipboardy (if needed): If you plan to use clipboard functionalities, you may need to install clipboardy:**
   ```bash
   npm install clipboardy
## How It Works
This project automates the process of logging into HackerRank, navigating to coding challenges, and solving them using predefined code snippets.

# HackerRank Automation

This project automates the process of logging into HackerRank, navigating to coding challenges, and solving them using predefined code snippets.

## Workflow

1. **Login**: The script logs into HackerRank using the credentials provided.
2. **Navigation**: After logging in, the script navigates to the Algorithms section and clicks the first available problem.
3. **Problem Solving**: The script enters the solution code into the Monaco Editor (HackerRank's in-browser code editor).
4. **Submission**: After pasting the solution, it submits the code automatically.

## Key Features

- **Login Automation**: Logs in to HackerRank using Puppeteer.
- **Monaco Editor Interaction**: Interacts with Monaco Editor to insert code with correct formatting, including handling newlines.
- **Solution Submission**: Submits the solution to the problem automatically.

## Code Example
Here is an example of the primary logic inside the script (main.js):
 ```bash
 const puppeteer = require("puppeteer-extra");
const clipboardy = require("clipboardy");

puppeteer.use(require("puppeteer-extra-plugin-stealth")());

let cpage;
const HackerRankLoginURL = "https://www.hackerrank.com/auth/login";
const username = "your-username";
const password = "your-password";

const browserPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
});

browserPromise
  .then(function (browser) {
    return browser.pages();
  })
  .then(function (pagesArr) {
    cpage = pagesArr[0];
    return cpage.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36");
  })
  .then(function () {
    return cpage.goto(HackerRankLoginURL);
  })
  .then(function () {
    return cpage.type('input[name="username"]', username, { delay: 50 });
  })
  .then(function () {
    return cpage.type('input[name="password"]', password, { delay: 50 });
  })
  .then(function () {
    return cpage.click('button[type="submit"]');
  })
  .then(function () {
    return waitAndClick('.topic-name[data-automation="algorithms"]', cpage);
  })
  .then(function () {
    return cpage.waitForSelector('button.ui-btn.ui-btn-normal.primary-cta');
  })
  .then(function (questionsArray) {
    return questionSolver(questionsArray[0], 'Your solution code here');
  })
  .catch(function (err) {
    console.error("Error occurred:", err);
  });

function waitAndClick(selector, page) {
  return new Promise(function (resolve, reject) {
    page.waitForSelector(selector)
      .then(function () {
        return page.click(selector, { force: true });
      })
      .then(function () {
        resolve();
      })
      .catch(reject);
  });
}

function questionSolver(question, answer) {
  return new Promise(function (resolve, reject) {
    if (!question) {
      return reject("Question element is undefined");
    }

    question.click()
      .then(function () {
        return cpage.waitForSelector('.monaco-editor');
      })
      .then(function () {
        return cpage.type('.monaco-editor', answer, { delay: 10 });
      })
      .then(function () {
        return cpage.keyboard.down("Control");
      })
      .then(function () {
        return cpage.keyboard.press('A', { delay: 100 });
      })
      .then(function () {
        return cpage.keyboard.press('X', { delay: 100 });
      })
      .then(function () {
        return cpage.keyboard.up("Control");
      })
      .then(function () {
        return cpage.click('.ui-btn.ui-btn-normal.ui-btn-primary');
      })
      .then(function () {
        resolve();
      })
      .catch(reject);
  });
};

```

## Explanation

- **Puppeteer**: Used to automate browser actions (like logging in, clicking buttons).
- **Monaco Editor API**: Interacts directly with the Monaco code editor to insert code (with proper formatting).
- **Clipboard**: Optional for copying code (you can use `clipboardy` to handle pasting).

## Running the Script

1. Open your terminal or command prompt.
2. Navigate to the project directory.
3. Run the script:

   ```bash
   node main.js

## Contributing

To contribute:

Fork the repository.

Create a new branch.

Make your changes.

Submit a pull request.

