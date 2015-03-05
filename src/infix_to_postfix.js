var operators = {
  '^': 4,
  '*': 3,
  '/': 3,
  '+': 2,
  '-': 2
};

var reserved = ['+', '*', '(', ')'];

var infixToPostfix = module.exports = function infixToPostfix(str) {
  var ops = str.split(' ');
  var stack = [];
  var out = [];

  for (var i = 0; i < ops.length; i++) {
    var o = ops[i];

    // Push all non-reserved tokens
    if (reserved.indexOf(o) === -1) {
      out.push(o);
      continue;
    }

    if (operators[o]) {
      while (stack.length > 0) {
        var o2 = operators[stack[stack.length - 1]];
        if (!o2) break;

        // Push stuff
        var o1 = operators[o];
        if (o1 > o2) {
          break;
        }

        out.push(stack.pop());
      }
      stack.push(o);
    } else if (o === '(') {
      stack.push(o);
    } else if (o === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        out.push(stack.pop());
      }
      stack.pop();
    }

  }

  // Empty stack remainder
  while (stack.length > 0) out.push(stack.pop());

  return out.join(' ');
};
