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

const flatten = function(arr) {
  let result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        result.push(innerElement);
      }
    } else {
      result.push(element);
    }
  }

  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); 
// Expected Output: [1, 2, 3, 4, 5, 6]
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// Test cases:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should fail