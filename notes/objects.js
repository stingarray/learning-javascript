var arr = [2, 7, 3];
arr[1]; // 7
arr[2]; // 3

// Problem: You have to know the index of the element that you want from an array
// Problem: Numbers are hard

// BAD
var person = ['Johhny', 'Reina', 27, 'Volkswagon'];
var firstName = person[0];
var lastName = person[1];
var age = person[2];
var car = person[3];

// Solution: Objects! Objects allow us to associate a string key with a value.
var person1 = {
  firstName: 'Johnny',
  lastName: 'Reina',
  age: 27,
  car: 'Volkswagon'
};

person1.firstName;
person1.car;

var person2 = {};

// Adding a property
person2.firstName = 'Carrah';

console.log(person2);
