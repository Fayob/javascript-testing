// Task 4

const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Invalid Input');
  }
  const firstLetter = string.split('')[0].toUpperCase();
  return firstLetter + string.slice(1);
};

module.exports = capitalize;