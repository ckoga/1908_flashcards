const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('./Deck')
const Round = require('./Round')

class Game {
  constructor() {
    this.currentRound = 0;
  }

  startGame() {
    let deck = new Deck(prototypeQuestions);
    let round = new Round(deck);

    this.currentRound++;

    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;