var expect = require('chai').expect;
var josephus = require('../src/josephus');

describe('josephus', function() {
  it('should solve it', function() {
    expect(josephus(1, 5)).to.eql([2, 4, 1, 5]);
  });
});
