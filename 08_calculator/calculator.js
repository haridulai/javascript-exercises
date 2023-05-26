const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.length ? array.reduce((total, current) => total * current) : 0;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }

  let currentNumber = 1;

  for (let i = 1; i <= number; i++) {
    currentNumber = currentNumber * i;
  }

  return currentNumber;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
