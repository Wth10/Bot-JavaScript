const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

async function Bot() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const Money1 = readlineSync.question('Base Inform One Currency: ');
  const Money2 = readlineSync.question('Inform a Final Coin: ');

  const Url = 'https://www.google.com/search?q=+'+Money1+'+para+'+Money2+'&oq='+Money1+'+para+'+Money2 +'&aqs=chrome..69i57j69i60.5928j0j4&sourceid=chrome&ie=UTF-8';
  await page.goto(Url);

  // await page.screenshot({ path: 'example.png' });
  // document.querySelector('.cilsF.a61j6').value

  const Result = await page.evaluate(() => {
    const Code = document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    return Code
  });

  console.log('The value of 1 ' + Money1 + ' In ' + Money2 + ' Its ' + Result);
  await browser.close()
}

Bot();
