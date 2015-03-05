var expect = require('chai').expect;
var postfixEval = require('../src/postfix_eval');

describe('postfix eval', function() {
  it('should evaluate postfix notation', function() {

    expect(postfixEval('6 4 5 + * 25 2 3 + / -'))
      .to.equal((6 * (4 + 5) - 25 / (2 + 3)));

  });
});
