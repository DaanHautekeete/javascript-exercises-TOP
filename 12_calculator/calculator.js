const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
	return array.reduce((prev, current) => prev + current, 0);
};

const multiply = function(array) {
  return array.reduce((prev, current) => prev * current);
};

multiply([5,10]);

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result = result * i;

  }
  
	return result;
};

factorial(2);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
