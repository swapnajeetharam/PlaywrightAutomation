const {test,expect}=require('@playwright/test')

test("E2E test case", async ({page})=>{

    const product_name="ZARA COAT 3";
    const products= page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await  page.locator("#userEmail").type("meerabaimom\@gmail.com");
    await  page.locator("#userPassword").type("Meerabai\@3681");
    await page.locator("input#login").click();
    await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const titles =await page.locator(".card-body b").allTextContents();
    
    console.log(titles);
   
    const count_product=await products.count();
    console.log(count_product);  

    for(let i =0;i<count_product;i++){
        if(await products.nth(i).locator("b").textContent()===product_name){
            await products.nth(i).locator("text= Add To Cart").click();
        }
    }
    await page.pause();
}
)