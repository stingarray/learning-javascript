var pi = 3.14;

// 1. Write a function that takes the radius of a circle and returns its circumference.
// circumference = 2*pi*r

function circumference(radius) {
  return 2 * pi * radius;
}

console.log(circumference(1));

// 2. Write a function that takes the radius of a circle and returns its area.
// area = pi * r * r

function area(radius) {
  return pi * radius * radius;
}

console.log(area(1));

// 3. Write a function that takes the length of the two sides of a right triangle and returns the length of the hypotenuse.
// hypotenuse = Math.sqrt(a * a + b * b);

function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

console.log(hypotenuse(3, 4));
