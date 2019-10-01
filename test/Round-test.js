const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');


describe('Round', () => {
  
  it('should be a function', () => {
    let round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    let round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  
})