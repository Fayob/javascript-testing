// Task 1

const stringLength = require('./stringLength.js');

it('should return the length value', () => {
  expect(stringLength('game')).toBe(4);
});
test('throw error if string is empty', () => {
  expect(() => stringLength('')).toThrow(Error);
});
test('throw error if string is more than 10', () => {
  expect(() => stringLength('qwertyuiopasdfg')).toThrow(Error);
});
