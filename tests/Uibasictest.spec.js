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

/*
If Id is present  
css -> tagname#id (or) #id  

If class attribute is present  
css -> tagname.class (or) .class  

Write css based on any Attribute  
css -> [attribute='value']  

Write Css with traversing from Parent to child  
css -> parenttagname >> childtagname  

If needs to write the locator based on text  
text=''
*

//const {test} = require('@playwright/test');
/*test("test1: browser context playwright test",async ({browser})=>// test annotation, browser= fixture
{
    //const context = await browser.newContext();
    //const page=await context.newPage();
    await page.goto("https://playwright.dev/docs/intro");
    expect(page).toHaveTitle("Installation|xPlaywright");
})*/
/*
test("test2:page playwright test ",async ({page})=>// test annotation, page = fixture
{
    await page.goto("https://google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})

test("test3: context and page checking",async ({browser})=>// test annotation, browser= fixture
{
    const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://playwright.dev/docs/intro");
    await expect(page).toHaveTitle(/Getting started | Playwright/);
}
)*/

test("Test4 : login to Rahul shetty Academy page",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractice/");
    console.log( await page.title());
    console.log(await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"));

    // css selector or xpath - used to identify element uniquely on the webpages
    await page.locator('#username').fill('rahulshettyacademy');//tagename is optionsal
    await page.locator('[type="password"]').fill('Learning');
    await page.locator('#terms').check();
    await page.locator('#signInBtn').click();
});