const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentTurn = 0;
    this.currentCard;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.currentTurn]
    // console.log(this.currentCard)

    return this.currentCard
  }

  takeTurn(userGuess) {
    this.currentTurn++;

    let turn = new Turn(userGuess, this.returnCurrentCard());


    // turn.evaluateGuess()
  }
}

module.exports = Round;