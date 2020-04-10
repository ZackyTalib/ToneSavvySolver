# ToneSavvySolver

ToneSavvySolver helps with finishing ToneSavvy assignments by using a series of NodeJS files powered by Puppeteer & TonalJS

  - Chord Identification Assignment
  - Interval Identification Assignment
  - Note Names Assignment
  - Rhythm Dictation Assignment
  - Key Signature Identification Assignment
  - Interval Ear Training Assignment (All Intervals + No Auto Proceed)

## Todo

- [x] Chord Identification Assignment - Major, Minor & Perfect Chords w Root Inversion
- [x] Interval Identification - No General Intervals
- [x] Interval Identification - Ask General Intervals Implementation
- [x] Chord Identification - Augmented & Diminished + Seventh Chords
- [x] Chord Identification - Inversions
- [x] Note Names Assignment
- [x] Rhythm Dictation Assignment
- [x] Key Signature Identification Assignment
- [x] Interval Ear Training Assignment - All Intervals + No Auto Proceed
- [ ] Interval Ear Training Assignment - Simple & Advanced Intervals
- [ ] Interval Ear Training Assignment - Auto Proceed

## Setup
1. Make sure Chrome is installed since the Puppeteer is used as the automation library.

2. Clone this github repository
    > git clone https://github.com/ZackyTalib/ToneSavvySolver

3. Install all the packages:
    > npm install

## Usage

1. Run the required script based on the assignment
    > ***Chord Identification Assignment***
    >
    > node chordIdentification
    >
    > ***Interval Identification Assignment***
    >
    > node intervalIdentification

2. The script will start Chromium and take you to ToneSavvy's home page - wait until the home page has fully loaded before doing anything.

> **Home Page**
> ![Home Page](https://i.ibb.co/fxRYH43/4.png)

3. The script won't start automation until it reaches the assignment page, use this time to log into your account and enter the assignment.

> **Assignment Page**
> ![Assignment Page](https://i.ibb.co/J5nKCbm/5.png)

4. Wait for some time, the script takes a while to start automation, **do not press the start quiz button** - the script will do this for you but it might take some time.

5. The script will keep repeating the cycle of solving the questions until the time limit ends or the assignment is exited.
