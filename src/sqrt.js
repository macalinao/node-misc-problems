module.exports = function sqrt(num) {
  for (var i = 0; i < num; i++) {
    if (i * i == num) {
      return i;
    } else if (i * i > num) {
      return i - 1;
    }
  }
  return -1;
}

