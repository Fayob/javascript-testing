// Test 1
const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('Invalid Input');
  }
  return string.length;
};

// Task 2
const reverseString = (string) => string.split('').reverse().join('');

// Task 3
class Calculator {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  }

  add() {
    if (typeof this.firstValue !== 'number' || typeof this.secondValue !== 'number') {
      throw new Error('Invalid Input');
    }
    return this.firstValue + this.secondValue;
  }

  subtract() {
    return this.firstValue - this.secondValue;
  }

  multiply() {
    return this.firstValue * this.secondValue;
  }

  divide() {
    return this.firstValue / this.secondValue;
  }
}

// Task 4
const capitalize = (string) => {
  const firstLetter = string.split('')[0].toUpperCase();
  return firstLetter + string.slice(1);
};

module.exports = {
  stringLength, reverseString, Calculator, capitalize,
};