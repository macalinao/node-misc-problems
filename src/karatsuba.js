function prependZeroes(str, n) {
  if (str.length < n) {
    var ct = n - str.length;
    for (var i = 0; i < ct; i++) {
      str = '0' + str;
    }
  }
  return str;
}

/**
 * Karatsuba multiplication on two numbers. These numbers should
 * have the same lengths.
 */
var karatsuba = module.exports = function karatsuba(n1, n2) {
  if (n1 < 10 && n2 < 10) {
    return n1 * n2;
  }

  var n1s = n1.toString();
  var n2s = n2.toString();
  var len = Math.max(n1s.length, n2s.length);
  n1s = prependZeroes(n1s, len);
  n2s = prependZeroes(n2s, len);

  var hlen = Math.floor(len / 2);

  var a = parseInt(n1s.substring(0, hlen));
  var b = parseInt(n1s.substring(hlen));

  var c = parseInt(n2s.substring(0, hlen));
  var d = parseInt(n2s.substring(hlen));

  var z0 = karatsuba(a, c);
  var z2 = karatsuba(b, d);
  var z1 = karatsuba(a + b, c + d) - z0 - z2;

  var n_2 = Math.ceil(len / 2);
  var n_1 = len % 2 == 0 ? len : len + 1;

  var res = (z0 * Math.pow(10, n_1)) + (z1 * Math.pow(10, n_2)) + z2;
  return res;
};
