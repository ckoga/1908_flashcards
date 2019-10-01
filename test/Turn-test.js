const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

  let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  let turn = new Turn('object', card);
  

  it('should be a function', () => {
    let turn = new Turn('object', card);
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    let turn = new Turn('object', card);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should return the userGuess', () => {
    let turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object')
  });

  it('should return the current card', () => {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('object', card);
    expect(turn.returnCard()).to.eql(card);
  });

  it('should compare user guess to the correctAnswer and return a boolean value', () => {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('object', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should return a string to tell the user their results', () => {
    let card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    let turn = new Turn('object', card);
    expect(turn.giveFeedback()).to.equal('correct!')
  });
})