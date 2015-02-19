/**
 * Dijkstra's.
 *
 * Let 1 represent a wall on the map and 0 represent an
 * open node.
 */
module.exports = function dijkstras(map, start, end) {
  // List of all nodes
  var list = [];

  // List array
  var larr = [];
  for (var i = 0; i < map.length; i++) {
    larr[i] = [];
  }

  // Populate array initially
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[0].length; j++) {
      // Skip if vertex is a wall
      if (map[i][j] !== 0) continue;

      // Get pair and hash
      var pair = [i, j];
      list.push(pair);
      larr[i][j] = pair;

      // Pair distance is 0 if start
      if (pair[0] === start[0] && pair[1] === start[1]) {
        pair.dist = 0;
      }
    }
  }

  while (list.length > 0) {

    // Find minimum in list
    var min = list[0];
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      if (typeof el.dist === 'undefined') continue;
      if (!min.dist || el.dist < min.dist) min = el;
    }

    // Check if found
    if (min[0] == end[0] && min[1] == end[1]) return min;

    // Remove min element from list
    list.splice(list.indexOf(min), 1);

    // Coords
    var i = min[0];
    var j = min[1];

    // adjacent
    var u = (larr[i] || {})[j - 1];
    var d = (larr[i] || {})[j + 1];
    var l = (larr[i - 1] || {})[j];
    var r = (larr[i + 1] || {})[j];

    [u, d, l, r].map(function(pair) {
      if (!pair) return;
      var alt = min.dist + 1;
      if (typeof pair.dist === 'undefined' || alt < pair.dist) {
        pair.dist = alt;
        pair.prev = min;
      }
    });
  }

};
