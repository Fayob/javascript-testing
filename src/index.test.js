const {
  stringLength, reverseString, Calculator, capitalize,
} = require('./index.js');

// Task 1
it('should return the length value', () => {
  expect(stringLength('game')).toBe(4);
});
test('throw error if string is empty', () => {
  expect(() => stringLength('')).toThrow(Error);
});
test('throw error if string is more than 10', () => {
  expect(() => stringLength('qwertyuiopasdfg')).toThrow(Error);
});

// Task 2
it('should reverse entered string', () => {
  expect(reverseString('age')).toBe('ega');
});
it('should reverse entered string', () => {
  expect(reverseString('again')).toBe('niaga');
});

// Task 3
describe('calculator', () => {
  test('should return the addition of two values', () => {
    expect(new Calculator(5, 5).add()).toBe(10);
  });
  test('should return the subtraction of two values', () => {
    expect(new Calculator(6, 4).subtract()).toBe(2);
  });
  test('should return the multiplication of two values', () => {
    expect(new Calculator(4, 25).multiply()).toBe(100);
  });
  test('should return the division of two values', () => {
    expect(new Calculator(15, 5).divide()).toBe(3);
  });
});

// Task 4
test('should return capitalize string', () => {
  expect(capitalize('rain')).toBe('Rain');
});