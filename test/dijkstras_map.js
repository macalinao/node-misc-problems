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

describe('dijkstras map', function() {
  it('should find the path', function() {
    expect(dijkstras(map, start, end)).to.equal(pathLen);
  });
});
