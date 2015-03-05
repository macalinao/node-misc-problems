var operators = {
  '^': function(a, b) {
    return Math.pow(a, b);
  },
  '*': function(a, b) {
    return a * b;
  },
  '/': function(a, b) {
    return a / b;
  },
  '+': function(a, b) {
    return a + b;
  },
  '-': function(a, b) {
    return a - b;
  }
};

module.exports = function postfixEval(str) {
  var tokens = str.split(' ');

  var stack = [];

  for (var i = 0; i < tokens.length; i++) {

    var token = tokens[i];

    if (operators[token]) {
      var b = stack.pop();
      var a = stack.pop();
      stack.push(operators[token](a, b));
    } else {
      stack.push(parseFloat(token));
    }

  }

  return stack.pop();
};
