var expect = require('chai').expect;
var infixToPostfix = require('../src/infix_to_postfix');

describe('infix to postfix', function() {
  it('should convert properly', function() {
    expect(infixToPostfix('a + b * c + ( d * e + f ) * g'))
      .to.equal('a b c * + d e * f + g * +');
  });
});
