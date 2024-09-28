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

// Test Case 1: Check the returned array elements
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1, ["Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]

// Test Case 4: Confirm the original array is not modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result2 = tail(words); 

assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words[0], "Yo Yo"); // first element should be "Yo Yo"
assertEqual(words[1], "Lighthouse"); // second element should be "Lighthouse"
assertEqual(words[2], "Labs"); // third element should be "Labs"

