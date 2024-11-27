// Assertion function to check if actual matches expected
const assertEqual = require("./assertEqual");

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};  // Step: Define an empty object to store results

  // Step: Loop over the allItems array
  for (const item of allItems) {
    // Check if the item is in itemsToCount
    if (itemsToCount[item]) {
      // Increment the count in results
      if (results[item]) {
        results[item] += 1;  // If item already exists, increment its count
      } else {
        results[item] = 1;    // If item does not exist, initialize its count to 1
      }
    }
  }

  return results;  // Return the results object containing the counts
};

// Testing code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
