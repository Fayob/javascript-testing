const { stringLength, reverseString } = require('./index.js');

// Task 1
it('should return the length value', () => {
  expect(stringLength('game')).toBe(4);
});

// Task 2
it('should reverse entered string', () => {
  expect(reverseString('age')).toBe('ega');
});