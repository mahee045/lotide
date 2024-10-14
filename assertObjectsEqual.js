const eqObjects = function(object1, object2) {
  // First, check if the number of keys is the same
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; // If not, return false
  }

  // Then, compare the values for each key
  for (const key of Object.keys(object1)) {
    // Check if the value is an array in both objects
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // Use eqArrays to compare the array values
      if (!eqArrays(object1[key], object2[key])) {
        return false; // Return false if the arrays are not equal
      }
    } else if (object1[key] !== object2[key]) {
      return false; // Return false if values are not equal
    }
  }

  return true; // If all keys and values matched, return true
};


// FUNCTION IMPLEMENTATION

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require("util").inspect; // Add this line
  
    // Compare objects using eqObjects
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  };
  
  
// Define some test objects
const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };
const object3 = { a: '1', b: 2, c: 3 };
const object4 = { a: '1', b: '2' };

// Call assertObjectsEqual with test cases
assertObjectsEqual(object1, object2); // Expect "Assertion Passed"
assertObjectsEqual(object1, object3); // Expect "Assertion Failed"
assertObjectsEqual(object1, object4); // Expect "Assertion Failed"

///did not understand insturctions for this assignment without LarryAI


