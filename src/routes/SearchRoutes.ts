import { Router } from "express";
const searchRouter = Router();
const puppeteer = require('puppeteer');





searchRouter.get("/Test", async (req, res) => {
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

    const elementos = await page.evaluate(() => {
        let elemnts = Array.from(document.querySelectorAll('#offer_offer'));
        let webs = elemnts.map(element => {
          
           const tmp= {} as any;
            tmp.web = element.querySelector('#offer_merchant_name')?.innerHTML;
            if(element.querySelector('#offer_has_coupon > div.price > span.price-value')?.textContent == null){
              tmp.precio = element.querySelector('#offer_has_not_coupon > span > span')?.textContent?.replace(/\s/g,'') ;
            } else {
              tmp.precio = element.querySelector('#offer_has_coupon > div.price > span.price-value')?.textContent?.replace(/\s/g,'') + " Price with coupon";
            }
         
          return tmp;
        })
        return webs;
    });

    await browser.close();
    res.send(elementos);
 
  } catch (error) {
    res.status(500).send(error);
  }

})


export = searchRouter;



