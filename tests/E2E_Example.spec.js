const {test,expect}=require('@playwright/test')
test("E2E test case", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");
    await  page.locator("#userEmail").type("meerabaimom\@gmail.com");
    await  page.locator("#userPassword").type("Meerabai\@3681");
    await page.locator("input#login").click();
    //await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const titles =await page.locator(".card-body b").allTextContents();
    
    console.log(titles);
})