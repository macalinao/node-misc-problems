var expect = require('chai').expect;
var dijkstras = require('../src/dijkstras_weighted');

var map = [
  [0, 0, 4, 2, 1, 2, 0, 0, 1],
  [2, 3, 4, 4, 4, 2, 0, 4, 1],
  [1, 4, 4, 1, 0, 0, 1, 4, 2],
  [3, 4, 1, 0, 4, 1, 2, 2, 0],
  [3, 0, 0, 4, 4, 1, 2, 2, 0],
  [3, 0, 2, 2, 1, 1, 0, 2, 0],
  [0, 1, 3, 4, 1, 1, 0, 0, 9]
];

var start = [6, 0];
var end = [0, 8];

var pathWeight = 5;
var path = [
  [6, 0],
  [6, 1],
  [5, 1],
  [4, 1],
  [4, 2],
  [3, 2],
  [3, 3],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [1, 6],
  [0, 6],
  [0, 7],
  [0, 8]
];

describe('dijkstras weighted', function() {
  it('should find the path', function() {
  });
});
