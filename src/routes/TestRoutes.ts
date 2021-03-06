import { Router } from "express";
const testRouter = Router();
const puppeteer = require('puppeteer');





testRouter.get("/Test", async (req, res) => {
    const { authorization } = req.headers;
    const { email, password } = req.body;
    const url = "https://www.allkeyshop.com/blog/buy-sea-of-thieves-cd-key-compare-prices/";
    const browser = await puppeteer.launch({
      headless : false   
      });
    const page = await browser.newPage();

  try {

    await page.goto(url,{
      waitUntil:["load","domcontentloaded","networkidle0", "networkidle2"]
    }); 
    
    await page.waitForSelector('#offer_offer');
    // await page.waitForTimeout(0);

    const urlImg = await page.$$eval('#gamepageSlider > div.gamepage__slide.gallery-slider.showing > a > img[src]', imgs => imgs.map(img => img.getAttribute('src')));
    //const text = await page.evaluate(() => Array.from(document.querySelectorAll('#offer_merchant_name'), element => element.innerHTML));
    // const webs = await page.evaluate(() => Array.from(document.querySelectorAll('#offer_has_coupon > div.price > span.price-value > span'), element => element.innerHTML));
   
    console.log(urlImg);

  //   const elementos = await page.evaluate(() => {
  //     let elemnts = Array.from(document.querySelectorAll('#offer_merchant_name'));
  //     let webs = elemnts.map(element => {

  //       return element.textContent
  //     })
  //     return webs;
  // });

    const elementos = await page.evaluate(() => {
        let img = document.querySelector('#gamepageSlider > div.gamepage__slide.gallery-slider.showing > a > img')?.getAttribute('src');
        let elemnts = Array.from(document.querySelectorAll('#offer_offer'));
        let webs = elemnts.map(element => {
          
           const tmp= {} as any;
            tmp.imgGame = img;
            tmp.web = element.querySelector('#offer_merchant_name')?.innerHTML;
          //  tmp.precio = element.querySelector('#offer_has_coupon > div.price > span.price-value')?.textContent?.replace(/\s/g,'')
            if(element.querySelector('#offer_has_coupon > div.price > span.price-value')?.textContent == null){
              tmp.precio = element.querySelector('#offer_has_not_coupon > span > span')?.textContent?.replace(/\s/g,'') ;
            } else {
              tmp.precio = element.querySelector('#offer_has_coupon > div.price > span.price-value')?.textContent?.replace(/\s/g,'') + " Price with coupon";
            }
         
          return tmp;
          // return tmp;
        })
        return webs;
    });

    await browser.close();
    res.send(elementos);
 
  } catch (error) {
    await browser.close();
    res.status(500).send(error);
  }

})


export = testRouter;