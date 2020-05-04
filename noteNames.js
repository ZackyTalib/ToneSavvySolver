const duration = 1000;
const puppeteer = require('puppeteer');

// Username zacky
// Password cats
// Test code 147649

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  await page.goto("https://tonesavvy.com/");

  await page.waitForSelector("#start-quiz", {timeout: 0});

  await page.reload({waitUntil: ["networkidle0"], timeout: 0});

  const startButton = await page.$('#start-quiz');
  await startButton.click();

  const answers = await page.$$('.btn.btn-lg.btn-primary.answer-btn');
  const notesDictionary = ["c", "d", "e", "f", "g", "a", "b"];

  let note;

  for(i=1; i>0; i++){
    note = await page.evaluate(() => {
      return Promise.resolve(ex.currentAnswer);
    });

    await answers[notesDictionary.indexOf(note)].click();

    await page.waitFor(duration);
  }

  //await browser.close();
})();
