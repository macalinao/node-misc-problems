function mini(arr, max, med) {
  var min = max;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min && arr[i] > med) {
      min = arr[i];
    }
  }
  return min;
}

function maxi(arr, min, med) {
  var max = min;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max && arr[i] < med) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Get the running median in O(n^2) time.
 */
module.exports = function runningMedian(arr) {
  var ret = [];
  var lastMedian = arr[0];
  ret.push(lastMedian);
  for (var i = 1; i < arr.length; i++) {
    var val = arr[i];
    if (i % 2 == 0) {
      if (val > lastMedian) {
        lastMedian = mini(arr.slice(0, i), val, lastMedian);
      }
    } else {
      if (val < lastMedian) {
        lastMedian = maxi(arr.slice(0, i), val, lastMedian);
      }
    }
    ret.push(lastMedian);
  }
  return ret;
};
