const capitalize = require('./capitalize.js');

// Task 4
test('should throw error if the argument is not a string', () => {
  expect(() => capitalize(4)).toThrow(Error);
});

test('should return capitalize string', () => {
  expect(capitalize('rain')).toBe('Rain');
});