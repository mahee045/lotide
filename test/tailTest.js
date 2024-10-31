const tail = require("../tail");
const assertEqual = require("../assertEqual");

///testing
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