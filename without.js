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

const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  }
};

function without(source, itemsToRemove) {
  const result = [];

  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      result.push(source[i]);
    }
  }

  return result;
}

// Original test case to ensure the original array isn't modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Additional test cases
console.log(without([1, 2, 3], [1])); // should print [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // should print ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["apple", "banana", "orange"], ["banana"]), ["apple", "orange"]);

// Tests for cases where nothing should be removed
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]);
assertArraysEqual(without(["apple", "banana", "orange"], ["grape"]), ["apple", "banana", "orange"]);