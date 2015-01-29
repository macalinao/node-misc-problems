module.exports = function sqrt(num) {
  for (var i = 0; i < num; i++) {
    if (i * i == num) {
      return i;
    } else if (i * i > num) {
      return i - 1;
    }
  }
  return -1;
};

module.exports.logn = function sqrt(num) {
  var x = Math.floor(num / 2);
  var half = x;

  for (;;) {
    if (x * x == num) {
      return x;
    } else if (x * x > num) {
      if (half == 1) return x - 1;
      half = Math.floor(half / 2);
      x -= half;
    } else {
      if (half == 1) return x;
      half = Math.floor(half / 2);
      x += half;
    }
  }
};
