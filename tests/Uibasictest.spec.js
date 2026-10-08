/*require('@playwright/test') → This loads the Playwright Test library into your program.
That library gives you several useful things (like test, expect, etc.).
const { test } = ... → This is JavaScript’s object destructuring. It means:
“From everything that Playwright Test provides, just take the test function and 
store it in a variable called test.”

there are totally 4 fixtures= browser, page

JS is asynchronous , code is excetured in non sequential manner. Await is added at each step*/

const {test,expect} = require('@playwright/test');
// @playwright/test- module, playwright is library  ,test is function
//import { test } from '@playwright/test';

//outer structure:
/*test("first playwright test",async ()=> // here function keyword can be ignored and only () will be left
{
//playwright code
})*/

//const {test} = require('@playwright/test');
test("test1: browser context playwright test",async ({browser})=>// test annotation, browser= fixture
{
    const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://playwright.dev/docs/intro")
    expect(page).toHaveTitle("Installation|xPlaywright")
})

test("test2:page playwright test ",async ({page})=>// test annotation, page = fixture
{
    await page.goto("https://google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})