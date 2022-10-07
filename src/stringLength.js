// Test 1

const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('Invalid Input');
  }
  return string.length;
};

module.exports = stringLength;