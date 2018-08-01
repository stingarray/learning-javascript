// function expressions
var add = function(a, b) {
  return a + b;
};

// Higher-order function - Accepts a function as a parameter, or returns a function.
var doCalc = function(operator, operand1, operand2) {
  return operator(operand1, operand2);
};

var max = function(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};

var min = function(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
};
console.log(doCalc(min, 27, 93));
