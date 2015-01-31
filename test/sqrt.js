var expect = require('chai').expect;
var sqrt = require('../src/sqrt');

describe('sqrt', function() {

  it('should calculate the correct square root', function() {
    expect(sqrt(4)).to.equal(2);
    expect(sqrt(7)).to.equal(2);
    expect(sqrt(9)).to.equal(3);
    expect(sqrt(15)).to.equal(3);
  });

  it('should calculate the correct square root with logn', function() {
    var sqrtl = sqrt.logn;
    expect(sqrtl(4)).to.equal(2);
    expect(sqrtl(7)).to.equal(2);
    expect(sqrtl(9)).to.equal(3);
    expect(sqrtl(15)).to.equal(3);
  });

});
