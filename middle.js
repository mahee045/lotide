// TEST/ASSERTION FUNCTIONS

const assertArraysEqual = require("../assertArraysEqual");


// ACTUAL FUNCTION
const middle = function(array) {
  const leng = array.length;
  if (leng < 3) {
    return [];
  }
  if (leng % 2 === 0) {
    return [array[(leng / 2) - 1], array[leng / 2]];
  } else {
    return [array[Math.floor(leng / 2)]];
  }
};

module.exports = middle;