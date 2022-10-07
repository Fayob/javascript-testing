// Task 2

const reverseString = require('./reverseString.js');

it('should reverse entered string', () => {
  expect(reverseString('age')).toBe('ega');
});
it('should reverse entered string', () => {
  expect(reverseString('again')).toBe('niaga');
});
