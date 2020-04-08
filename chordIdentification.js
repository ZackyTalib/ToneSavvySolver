const puppeteer = require('puppeteer');
const { Chord } = require("@tonaljs/tonal");

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
  const majorAnswer = answers[0];
  const minorAnswer = answers[1];

  let chordNotes;

  for(i=1; i>0; i++){

    chordNotes = await page.evaluate(() => {
      return Promise.resolve(ex.currentChordNotes);
    });

    if(solve(chordNotes) == "M"){
      await majorAnswer.click();
    } else {
      await minorAnswer.click();
    }

    await page.waitFor(1000);

  }

  //await browser.close();
})();

function solve(chordNotes){
  let note1 = chordNotes[0].letter + ((chordNotes[0].accidental == "none") ? "" : chordNotes[0].accidental);
  let note2 = chordNotes[1].letter + ((chordNotes[1].accidental == "none") ? "" : chordNotes[1].accidental);
  let note3 = chordNotes[2].letter + ((chordNotes[2].accidental == "none") ? "" : chordNotes[2].accidental);
  return Chord.detect([note1, note2, note3])[0].slice(-1);
}
