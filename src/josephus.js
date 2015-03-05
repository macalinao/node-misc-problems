module.exports = function josephus(m, n) {
  var arr = [];
  for (var i = 1; i <= n; i++) {
    arr.push(i);
  }

  var ret = [];
  var last = 0;

  // O(n) solution -- we can't do better
  while (arr.length > 1) {
    var rem = (m + last) % arr.length;
    ret.push(arr.splice(rem, 1)[0]);
    last = rem;
  }

  return ret;
};
