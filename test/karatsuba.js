var expect = require('chai').expect;
var karatsuba = require('../src/karatsuba');

describe('karatsuba', function() {
  it('should accurately multiply the numbers', function() {
    var n1 = 1234;
    var n2 = 5678;
    expect(karatsuba(n1, n2)).to.equal(n1 * n2);
  });

  it('should accurately multiply long numbers', function() {
    var n1 = 1234239847;
    var n2 = 5678;
    expect(karatsuba(n1, n2)).to.equal(n1 * n2);
  });

  it('should accurately multiply weird lengths', function() {
    var n1 = 123423984702392;
    var n2 = 8;
    expect(karatsuba(n1, n2)).to.equal(n1 * n2);
  });
});
