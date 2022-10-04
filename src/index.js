// Test 1
const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('Invalid Input');
  }
  return string.length;
};

// Task 2
const reverseString = (string) => string.split('').reverse().join('');

class Calculator {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue;
    this.secondValue = secondValue;
  }

  add() {
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

module.exports = { stringLength, reverseString, Calculator };