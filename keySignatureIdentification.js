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

  const answers = await page.$$('.btn.btn-lg.btn-primary.note-name-answer-btn.answer-btn');
  const notesDictionary = ["C", "D", "E", "F", "G", "A", "B"];

  const flatAccidental = await page.$('#flat-key-answer-btn');
  const naturalAccidental = await page.$('#natural-key-answer-btn');
  const sharpAccidental = await page.$('#sharp-key-answer-btn');

  let keySignature;
  let keySignatureExist = await page.evaluate(() => {
    return Promise.resolve(document.querySelector("#natural-key-answer-btn").style.display);
  });

  for(i=1; i>0; i++){

    keySignature = await page.evaluate(() => {
      return Promise.resolve(ex.currentQuestion);
    });

    if(keySignature[1] == "&"){
      if(keySignature[6] == "9"){
        await sharpAccidental.click();
      } else {
        await flatAccidental.click();
      }
    }

    if(keySignature[1] == "b" || keySignature[1] == "#"){
      if(keySignature[1] == "#"){
        await sharpAccidental.click();
      } else {
        await flatAccidental.click();
      }
    }

    if(keySignatureExist != "none" && keySignature[1]==" "){
      await naturalAccidental.click();
    }

    await answers[notesDictionary.indexOf(keySignature[0])].click();

    await page.waitFor(duration);
  }

  //await browser.close();
})();
