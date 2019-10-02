const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.currentTurn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.currentTurn]

    return this.currentCard
  }
  
  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.returnCurrentCard());
    
    this.currentTurn++;

    turn.evaluateGuess() ? null : this.incorrectGuesses.push(this.currentCard.id)


    return turn.giveFeedback();
  }
}

module.exports = Round;