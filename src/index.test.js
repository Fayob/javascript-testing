// Task 1
const { stringLength } = require('./index.js');

it('should return the length value', () => {
  expect(stringLength('game')).toBe(4);
});
