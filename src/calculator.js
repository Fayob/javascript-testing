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
    if (!this.firstValue || !this.secondValue) {
      throw new Error('Invalid Input');
    }
    return this.firstValue + this.secondValue;
  }

  subtract() {
    if (typeof this.firstValue !== 'number' || typeof this.secondValue !== 'number') {
      throw new Error('Invalid Input');
    }
    if (this.secondValue > this.firstValue) {
      return false;
    }
    return this.firstValue - this.secondValue;
  }

  multiply() {
    if (typeof this.firstValue !== 'number' || typeof this.secondValue !== 'number') {
      throw new Error('Invalid Input');
    }
    if (this.secondValue === 0) {
      return 0;
    }
    return this.firstValue * this.secondValue;
  }

  divide() {
    if (typeof this.firstValue !== 'number' || typeof this.secondValue !== 'number') {
      throw new Error('Invalid Input');
    }
    if (this.secondValue === 0) {
      return undefined;
    }
    return this.firstValue / this.secondValue;
  }
}

module.exports = Calculator;