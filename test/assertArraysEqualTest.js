///require
///require logic file 
const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");


///testing
// Test cases:
eqArrays([1, 2, 3], [1, 2, 3]); // => should pass
eqArrays([1, 2, 3], [3, 2, 1]); // => should fail
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => should pass
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => should fail