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

  // Dijkstra's
  while (list.length > 0) {
    // Get minimum
    var min = minPair(list);
    list.splice(list.indexOf(min), 1);
    var i = min[0];
    var j = min[1];

    // Check if found
    if (pairEq(min, end)) return min;

    // Find distances
    [
      (larr[i - 1] || {})[j],
      (larr[i + 1] || {})[j],
      (larr[i] || {})[j - 1],
      (larr[i] || {})[j + 1]
    ].map(function(el) {
      if (!el) return;
      var m = el.weight + min.dist;
      if (typeof el.dist === 'undefined' || m < el.dist) {
        el.dist = m;
        el.prev = min;
      }
    });
  }
};
