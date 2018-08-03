var distillery = 'The Balvenie';

var type = 'Carribean Cask';

var age = 14;

var strength = 43;

var barrelType = 'Scotch';

var flavors = [
  'Tropical Fruits',
  'Passion Fruit',
  'Toffee',
  'Apples',
  'Mangos',
  'Oranges',
  'Vanilla'
];

var drink = {
  maker: distillery,
  bottle: type,
  years: age,
  percent: strength,
  liquor: barrelType,
  accents: flavors
};

// console.log(drink);

var drink2 = {
  maker: 'Jack Daniels',
  bottle: 'Gentlemen Jack',
  years: 0.5,
  percent: 40,
  liquor: 'Whiskey',
  accents: ['All the Flavors']
};

// console.log(drink2);

var drinks = [drink, drink2];

drink.proof = drink.percent * 2;

drink2.proof = drink2.percent * 2;

console.log(drinks);
