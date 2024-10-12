const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Define the countLetters function
const countLetters = function (string) {
  const results = {}; // Initialize the results object

  // Iterate over each letter in the string
  for (const letter of string) {
    if (results[letter]) { // Check if the letter is already a key
      results[letter] += 1; // Increment the count
    } else {
      results[letter] = 1; // Initialize the count
    }
  }
  
  console.log(results); // Log the results after processing the string
  return results; // Return the results object
};

// Test the function with the example string
const letters = countLetters("lighthouse in the house");
