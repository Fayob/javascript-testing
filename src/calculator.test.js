// Task 3

const Calculator = require('./calculator.js');

describe('calculator', () => {
  // Addition
  test('should throw error if the argument is not a number in addition', () => {
    expect(() => new Calculator('r', 4).add()).toThrow(Error);
  });
  test('should return the addition of two values', () => {
    expect(new Calculator(5, 5).add()).toBe(10);
    expect(new Calculator(15, 15).add()).toBe(30);
    expect(new Calculator(50, 50).add()).toBe(100);
  });
  test('should return false if no number is provided', () => {
    expect(() => new Calculator().add()).toThrow(Error);
    expect(() => new Calculator(2).add()).toThrow(Error);
  });

  // Subtraction
  test('should throw error if the argument is not a number in subtraction', () => {
    expect(() => new Calculator('8', 4).add()).toThrow(Error);
  });
  test('should return the subtraction of two values', () => {
    expect(new Calculator(6, 4).subtract()).toBe(2);
    expect(new Calculator(12, 6).subtract()).toBe(6);
    expect(new Calculator(96, 2).subtract()).toBe(94);
  });
  test('should return false if the second argument is greater than the first argument', () => {
    expect(new Calculator(2, 4).subtract()).toBe(false);
  });

  // Multiplication
  test('should throw error if the argument is not a number in multiplication', () => {
    expect(() => new Calculator(5, '4').add()).toThrow(Error);
  });
  test('should return the multiplication of two values', () => {
    expect(new Calculator(4, 25).multiply()).toBe(100);
    expect(new Calculator(3, 1).multiply()).toBe(3);
    expect(new Calculator(14, 2).multiply()).toBe(28);
  });
  test('should return 0 if the second argument is 0', () => {
    expect(new Calculator(1, 0).multiply()).toBe(0);
  });

  // Division
  test('should throw error if the argument is not a number in division', () => {
    expect(() => new Calculator('r', 't').add()).toThrow(Error);
  });
  test('should return the division of two values', () => {
    expect(new Calculator(15, 5).divide()).toBe(3);
    expect(new Calculator(50, 5).divide()).toBe(10);
    expect(new Calculator(150, 2).divide()).toBe(75);
  });
  test('should return defined if the second argument is 0', () => {
    expect(new Calculator(1, 0).divide()).toBeUndefined();
  });
});
