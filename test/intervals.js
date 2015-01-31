var expect = require('chai').expect;
var intervals = require('../src/intervals');

describe('intervals', function() {
  it('should find the intervals', function() {
    var aList = [[10, 20], [30, 40], [50, 60], [70, 80]];
    var bList = [[5, 15], [32, 36], [37, 39], [55, 60]];
    var res = [[10, 15], [32, 36], [37, 39], [55, 60]];
    expect(intervals(aList, bList)).to.eql(res);
  });
});
