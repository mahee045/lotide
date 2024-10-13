const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }


  for (let i= 0; i <actual.length; i++)  {
    if (actual[i] !== expected[i]) {
      return false; 
  }
}

return true;

};



const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
console.log(results1);



////TESTING CASES 

///THIS ONE CHECK IF THE LETTERS MATCH 
const result = map(words, (word) => word[0]);
const expected = ['g', 'c', 't', 'm', 't'];
assertArraysEqual(result, expected);

////THIS ONE CHECKS IF THE ENTIRE WORD MATCHES 
const resultWords = map(words, (word) => word); 
const expectedWords = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(resultWords, expectedWords);

///chat gpt gave the idea of testing for the lengths 
const resultLengths = map(words, (word) => word.length);
const expectedLengths = [6, 7, 2, 5, 3]; 
assertArraysEqual(resultLengths, expectedLengths);