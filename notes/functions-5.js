var myArray = [3, 2, 1, 0];
var assert = require('assert');

// 1. Write a function called "head" which accepts an array and returns the first element of the array.
function head(arr) {
  return arr[0];
}
assert.equal(head(myArray), 3);
console.log(head(myArray));

// 2. Write a function called "tail" which accepts an array and returns the last element of the array.
function tail(arr) {
  return arr[arr.length - 1];
}

assert.equal(tail(myArray), 0);
console.log(tail(myArray));
