const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

async function Bot() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const moeda1 = readlineSync.question("Informe Uma Moeda Base: ");
  const moeda2 = readlineSync.question("Informe Uma Moeda Final: ");

  const Url = "https://www.google.com/search?q=+"+moeda1+"+para+"+moeda2+"&oq="+moeda1+"+para+"+moeda2 +"&aqs=chrome..69i57j69i60.5928j0j4&sourceid=chrome&ie=UTF-8";
  await page.goto(Url);

  // await page.screenshot({ path: 'example.png' });
  // document.querySelector('.cilsF.a61j6').value

  const Resultado = await page.evaluate(() => {
    const CodeDolar = document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value;
    return CodeDolar;
  });

  console.log("O Valor De 1 " + moeda1 + " Em " + moeda2 + " É " + Resultado);
  await browser.close();
}

Bot();
