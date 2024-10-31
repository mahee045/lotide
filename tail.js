const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

// Function definition for tail
const tail = function(arr) {
  return arr.slice(1);
};



module.exports = tail;

