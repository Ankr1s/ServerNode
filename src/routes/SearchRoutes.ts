import { Router } from "express";
const searchRouter = Router();
const puppeteer = require('puppeteer');


searchRouter.post("/searchGame", async (req, res) => {
    const { gameName} = req.body;

    const game = gameName.replace(/\s/g, '-')
  

    const url = "https://www.allkeyshop.com/blog/buy-"+game+"-cd-key-compare-prices/";
    const browser = await puppeteer.launch({
      headless : false   
      });
    const page = await browser.newPage();

  try {

    await page.goto(url,{
      waitUntil:["load","domcontentloaded","networkidle0", "networkidle2"]
    }); 

  
   // await page.waitForSelector('#offer_offer');

    const elementos = await page.evaluate(() => {
        let img = document.querySelector('#gamepageSlider > div.gamepage__slide.gallery-slider.showing > a > img')?.getAttribute('src');
        let elemnts = Array.from(document.querySelectorAll('#offer_offer'));
        let games = elemnts.map(element => {
          
           const tmp= {} as any;
            tmp.imgGame = img;
            tmp.web = element.querySelector('#offer_merchant_name')?.innerHTML;
            if(element.querySelector('#offer_has_coupon > div.price > span.price-value')?.textContent == null){
              tmp.precio = element.querySelector('#offer_has_not_coupon > span > span')?.textContent?.replace(/\s/g,'') ;
            } else {
              tmp.precio = element.querySelector('#offer_has_coupon > div.price > span.price-value')?.textContent?.replace(/\s/g,'') + " Price with coupon";
            }
            tmp.buyUrl = element.querySelector('div.offers-table-row-cell.buy-btn-cell > a.d-lg-none.buy-btn.x-offer-buy-btn')?.getAttribute('href');
         
          return tmp;
        })
        return games;
    });

    await browser.close();
    if (elementos.length == 0){
      res.status(400).send();
    
    } else {
      res.send(elementos);
    }
 
  } catch (error) {
    await browser.close();
    res.status(500).send(error);
  }

})


export = searchRouter;