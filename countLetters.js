
const assertEqual = require("./assertEqual");

// Define the countLetters function
const countLetters = function (string) {
  const results = {}; // Initialize the results object

  // Iterate over each letter in the string
  for (const letter of string) {
    if (letter === ' ') {
      continue; // This will skip the rest of the loop for this iteration
    }
    
    // Initialize count for each letter
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
const result1 = countLetters("lighthouse in the house"); // Correct variable name

// Use the correct variable for assertions
assertEqual(result1['l'], 1); // Expecting 1 for 'l'
assertEqual(result1['i'], 2); // Expecting 1 for 'i'
assertEqual(result1['h'], 4); // Expecting 2 for 'h'
assertEqual(result1['o'], 2); // Expecting 2 for 'o'
