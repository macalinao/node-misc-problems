function minPair(list) {
  var min = list[0];
  for (var i = 0; i < list.length; i++) {
    var el = list[i];
    if (typeof el.dist === 'undefined') continue;
    if (typeof min.dist === 'undefined' || el.dist < min.dist) min = el;
  }
  return min;
}

function pairEq(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

module.exports = function dijkstras(map, start, end) {
  var list = [];
  var larr = [];
  for (var i = 0; i < map.length; i++) larr[i] = [];

  // Populate pair map
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[0].length; j++) {
      // Pair
      var pair = [i, j];
      pair.weight = map[i][j];
      if (pairEq(start, pair)) pair.dist = 0;

      // Set the pairs
      list.push(pair);
      larr[i][j] = pair;
    }
  }

  // Dijkstra's time
  while (list.length > 0) {
  }
};
