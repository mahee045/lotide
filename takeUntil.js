const takeUntil = function(array, callback) {
  const results = []; //for storing the results of the new array we will create 

  for (let value of array) { // Loop through each element in the array
    if (callback(value)) { // Check if the callback returns a truthy value
      break; // exit the loop
    }
    results.push(value); // Add the new values to the results array 
  }

  return results; // Return the new array
};

///testing for array equality 
const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

///test conditions 
//TESTING
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Test Cases
const expected1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expected1); // Check for test 1

const expected2 = ["I've", "been", "to", "Hollywood"]; 
assertArraysEqual(results2, expected2); // Check for test 2 