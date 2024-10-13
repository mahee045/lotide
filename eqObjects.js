const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {  // Used when a key has multiple properties making it an array so we are going to compare the arrays
  if (actual.length !== expected.length) {
    return false;
  }
  // Compare each element in the arrays
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false; // Return false if any element is not equal
    }
  }
  return true; // Return true if all elements are equal
};

// Returns true if both objects have identical keys with identical values.
// Otherwise, you get back a big fat false!
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

// Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};

// Assert equal statements
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // Expecting true
assertEqual(eqObjects(shirtObject, longSleeveMultiColorShirtObject), false); // Expecting false
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // Expecting true
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // Expecting false
