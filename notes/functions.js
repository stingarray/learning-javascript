/*
Formally defined, a function is a mapping of a set of inputs to a set of outputs.
*/

function add(a, b) {
  return a + b;
}

var y = add(2, 6);

console.log(y);

function greet(name) {
  console.log('Hello, my name is ' + name);
}

greet('Carrah');

var increment = function(n) {
  return n + 1;
};

var double = function(n) {
  return n * 2;
};

var incrementAndDouble = function(n) {
  return double(increment(n));
};

console.log(incrementAndDouble(99));

var getName = function(person) {
  return person.name;
};

var me = { name: 'Carrah' };

console.log(getName(me));
