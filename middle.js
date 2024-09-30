// TEST/ASSERTION FUNCTIONS
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; 
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; 
    }
  }
  
  return true; 
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

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
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(([1, 2, 3])); // => [2]
console.log(([1, 2, 3, 4, 5])); // => [3]
console.log(([1, 2, 3, 4])); // => [2, 3]
console.log(([1, 2, 3, 4, 5, 6])); // => [3, 4]