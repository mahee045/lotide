const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false; 
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false; 
    }
  }
  
  return true; 
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const letterPositions = function (sentence) {
  const results = {};
   for(let i=0; i < sentence.length; i ++) {   ///this line make sures the loop doesnt go outof bounds
    const letter = sentence [i];
  
    if (letter === " "){
      continue; ///make sure it skips over spaces

    } 
    if (!results[letter]) {  
      results[letter] = [];  // Initialize as an empty array: i added this in the end when i ran into error, learned this basicaly for loop 1, since it checks if it doesnt exist, gives it empty value so later it can become 1
    }
    
    if(results[letter]) {  //this line is espeicaly for when it loops again, checking if key already exists
      results[letter].push(i);
    }
  }
    
  return results;
};
// Test with a small string "hello"
const result = letterPositions("hello");

// Expected positions for each letter
const expectedH = [0];         // 'h' is at index 0
const expectedE = [1];         // 'e' is at index 1
const expectedL = [2, 3];      // 'l' is at indices 2 and 3
const expectedO = [4];         // 'o' is at index 4

// Using assertArraysEqual to compare
assertArraysEqual(result['h'], expectedH); // Expecting [0]
assertArraysEqual(result['e'], expectedE); // Expecting [1]
assertArraysEqual(result['l'], expectedL); // Expecting [2, 3]
assertArraysEqual(result['o'], expectedO); // Expecting [4]