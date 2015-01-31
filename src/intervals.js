function contains(intv, num) {
  return num >= intv[0] && num <= intv[1];
}

function inter(a, b) {
  return [Math.max(a[0], b[0]), Math.min(a[1], b[1])];
}

module.exports = function intervals(aList, bList) {
  var ret = [];
  var i = 0;
  var j = 0;
  for (;;) {
    var a = aList[i];
    var b = bList[j];
    if (contains(a, b[0]) || contains(a, b[1])) {
      ret.push(inter(a, b));
    }

    if (a[1] > b[1]) {
      j++;
    } else {
      i++;
    }

    if (i > bList.length - 1 || j > bList.length - 1) {
      break;
    }
  }
  return ret;
};
