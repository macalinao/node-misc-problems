var expect = require('chai').expect;
var dijkstras = require('../src/dijkstras_map');

var map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var start = [6, 0];
var end = [0, 8];
var pathLen = 14;
var path = [
  [6, 0], [5, 0], [4, 0], [3, 0], [2, 0],
  [1, 0], [0, 0], [0, 1], [0, 2], [0, 3],
  [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]
];

describe('dijkstras map', function() {
  it('should find the path', function() {
    var res = dijkstras(map, start, end);
    expect(res.dist).to.equal(pathLen);

    // Compare path
    var pr = path.reverse();
    var i = 0;
    while (res) {
      expect(res[0]).to.equal(pr[i][0]);
      expect(res[1]).to.equal(pr[i][1]);
      res = res.prev;
      i++;
    }
  });
});
