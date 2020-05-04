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

  const answers = await page.$$('.btn.btn-lg.btn-primary.chord-type-answer-btn.answer-btn');
  const inversionAnswers = await page.$$('.btn.btn-lg.btn-primary.chord-inversion-answer-btn.answer-btn');
  const chordDictionary = ["Major Triad", "Minor Triad", "Augmented Triad", "Diminished Triad", "Dominant Seventh", "Major Seventh", "Minor Seventh", "Minor Major Seventh", "Half-Diminished Seventh", "Fully-Diminished Seventh", "Augmented Seventh", "Augmented Major Seventh"];

  let chord;
  let inversion;

  for(i=1; i>0; i++){
    chord = await page.evaluate(() => {
      return Promise.resolve(ex.currentChordType);
    });

    inversion = await page.evaluate(() => {
      return Promise.resolve(ex.currentInversion);
    });

    await inversionAnswers[inversion].click();
    await answers[chordDictionary.indexOf(chord)].click();

    await page.waitFor(duration);
  }

  //await browser.close();
})();
