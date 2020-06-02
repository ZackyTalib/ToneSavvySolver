const duration = 1000;
const puppeteer = require('puppeteer');

// Username zacky
// Password cats
// Test code 147649

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto("https://tonesavvy.com/");

  await page.waitForSelector("#start-quiz", {
    timeout: 0
  });

  await page.reload({
    waitUntil: ["networkidle0"],
    timeout: 0
  });

  const startButton = await page.$('#start-quiz');
  await startButton.click();

  for (i = 1; i > 0; i++) {
    await page.evaluate(() => {
      let element = "";
      if (ex.noteAccidental == "b") {
        element = document.querySelector("[notename2='" + ex.noteName + "'][octave='" + ex.noteOctave + "'][accidental2='" + ex.noteAccidental + "']");
      } else {
        element = document.querySelector("[notename='" + ex.noteName + "'][octave='" + ex.noteOctave + "'][accidental='" + ex.noteAccidental + "']");
      }
      element.click();
      return Promise.resolve(ex.answerSemitones);
    });

    await page.waitFor(duration);
  }

  //await browser.close();
})();
