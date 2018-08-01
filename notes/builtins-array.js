// Most things in Javascript have "built-in" methods, and properties
// because everything in Javascript is an object (technically)

var arr = [0, 1, 2, 3, 4, 5];

console.log(arr.length);
console.log(arr.concat('hello'));
// console.log(arr.push('hello'));
console.log(arr);
console.log(
  arr.map(function(x) {
    return x * 2;
  })
);
console.log(
  arr.filter(function(x) {
    return x % 2 === 0;
  })
);
console.log();
console.log();
