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


})