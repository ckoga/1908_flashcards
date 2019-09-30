const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {

  let turn = new Turn();
  let card = new Card();
  

  it('should be a function', () => {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    let turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });


})