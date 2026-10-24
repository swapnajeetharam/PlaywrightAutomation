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
*/

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
/*
test.only("Test4 : login to Rahul shetty Academy page_error message validation",
    async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractice/");
    console.log( await page.title());
    //console.log(await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"));

    // css selector or xpath -
    // used to idxentify element uniquely on the webpages
    await page.locator('#username').fill('rahulshettyacademy');//tagename is optionsal
    await page.locator('[type="password"]').fill('Learning@830$3mK2');
    await page.locator('#terms').check();
    await page.locator('#signInBtn').click();
    //login page error message related code 
    console.log(await page.locator("[style\*='block']").textContent());
    await expect(page.locator("[style\*='block']")).toContainText('Incorrect');
   
    const first_text=await page.locator('.card-body a').first().textContent();
    console.log(first_text);
    console.log((await page.locator('.card-body a').nth(2).textContent()));
    //const all_text=await page.locator('.card-body a').allTextContents();
    //console.log(all_text);
    await context.close() ;*/
/*
test("Test5: assert all text content:",async({browser})=>
    {const context = await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    
    await page.locator("#username").fill("anshika@gmail.com");
    const pwd= await page.locator(["type='password'"]).fill("anshika@gmail.com");
    const signin=await page.locator('#signInBtn').click();*/

test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   //const productName = 'zara coat 3';
   //const products = page.locator(".card-body");


   await page.goto("https://rahulshettyacademy.com/client",{ waitUntil: 'networkidle'});
   await page.locator("#userEmail").fill("meerabaimom@gmail.com");
   await page.locator("#userPassword").fill("Meerabai@3681");
   await page.locator("[value='Login']").click();
   //await page.waitForLoadState("networkidle"); // waits until network is idle
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
   
   //for(let products in titles)
   //{console.log(products)}
   await page.pause() 
});

test("dropdown test script", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").fill("rahulshettyacademy"); //rahulshettyacademy
    await page.locator("#password").fill("Learning@830$3mK2");
    
    // Select by value
    await page.locator("select.form-control").selectOption("consult");

    // Validate by value    
    const dd= page.locator("select.form-control");
    await expect(dd).toHaveValue("consult");
    console.log("Dropdown test is successfull")
    await page.pause();

    await page.locator("#signInBtn").click();
    
});

test.only("radio button and checkbox test script", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").fill("rahulshettyacademy"); //rahulshettyacademy
    await page.locator("#password").fill("Learning\@830\$3mK2");

    const RDcount=await page.locator(".radiotextsty").count();
    console.log("number of radio button:",RDcount);
    const labelText = await page.locator('span.radiotextsty').allTextContents();
    console.log("radio button:",labelText);
    
    // verify admin radio button is selectced by default
    const Fchecked=await page.locator("span.radiotextsty").first().isChecked();
    const Schecked=await page.locator(".radiotextsty").last().check();
    await expect( page.locator(".radiotextsty").last()).toBeChecked()
    console.log("admin is checked:",await page.locator(".radiotextsty").first().isChecked());
    console.log("user is checked:",await page.locator(".radiotextsty").last().isChecked());

    console.log("checkbox test script starts here");
    await page.locator("input#terms").click();//isChecked()
    await expect(page.locator("input#terms")).toBeChecked();
    expect(await page.locator("input#terms").uncheck());
     expect(await page.locator('#terms').isChecked()).toBeFalsy();
        
    await page.pause();
});

test("blinking text", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    const doclink = page.locator('[href*="documents-request"]');
    await expect(doclink).toHaveAttribute("class", "blinkingText");//allTextContents() fetches text
    });

test("child windows", async({browser})=>
{
const context=await browser.newContext();
const page=await context.newPage();
 await page.goto("https://rahulshettyacademy.com/loginpagePractise");
 const username= page.locator('#username');
 const doc_link=page.locator("[href*='documents-request']");
 
 //promise.all-returns an array
 const [newPage]=await Promise.all([
 context.waitForEvent("page"),        
 doc_link.click(),
])
 
const newPageTxtVaidtn = await newPage.locator(".red").textContent();
console.log(newPageTxtVaidtn);
}
)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++





