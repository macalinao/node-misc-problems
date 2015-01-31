var expect = require('chai').expect;
var runningMedian = require('../src/running_median');

describe('running median', function() {
  it('should get the running median', function() {
    var arr = [1, 3, 4, 6, 2];
    var res = [1, 1, 3, 3, 3];
    expect(runningMedian(arr)).to.eql(res);
  });
});
