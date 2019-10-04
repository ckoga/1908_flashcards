const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Game = require('../src/Game');


describe('Game', () => {

   let deck, card1, card2, card3, turn, round, game;

  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    deck = new Deck([card1, card2, card3])
    round = new Round(deck);
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  });

  // it('should print the question', () => {
  //   expect(game.printQuestiono()).to.equal(card1)
  // })

})