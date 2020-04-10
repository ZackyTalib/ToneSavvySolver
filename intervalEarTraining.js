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

  const nextButton = await page.$('#hear-next-text');

  for(i=1; i>0; i++){
    await page.evaluate(() => {
      document.querySelectorAll(".btn.btn-primary.answer-btn")[ex.answerSemitones-1].click();
      return Promise.resolve(ex.answerSemitones);
    });

    await page.waitFor(1000);

    await nextButton.click();

    await page.waitFor(1000);
  }

  //await browser.close();
})();
