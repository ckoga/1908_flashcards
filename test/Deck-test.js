const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');

describe('Deck', () => {

  it('should be a function', () => {
    let deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    let deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck)
  });
  
})