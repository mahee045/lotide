///require

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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;