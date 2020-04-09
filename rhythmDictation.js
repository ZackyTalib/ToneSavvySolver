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

  const answers = await page.$$(".btn.btn-lg.btn-primary.answer-btn.rhythm-answer-btn");
  const rhythmDictionary = ["w", "hd", "h", "qd", "q", "8"];

  let rhythm;

  for(i=1; i>0; i++){
    rhythm = await page.evaluate(() => {
      return Promise.resolve(ex.rhythm);
    });

    for(i=0; i<rhythm.length; i++){
      await answers[rhythmDictionary.indexOf(rhythm[i])].click();
    }

    await page.waitFor(1000);
  }

  //await browser.close();
})();
