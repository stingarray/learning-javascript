// A method is a function that belongs to an object.
var person = {
  first: 'Susan',
  last: 'Sanders',
  greet: function() {
    console.log('Hello, my name is ' + this.first + ' ' + this.last);
  }
};

person.greet();

var vector = {
  x: 3,
  y: 4,
  magnitude: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
};

console.log(vector.magnitude());
