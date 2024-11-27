const assertEqual = require("./assertEqual");

////code 
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  
  for (const key of keys) { //for looping
    
    if (callback(object[key])) { ///checking turthy 

      return key;
    }
  }
  

  return undefined;
};



///example 
const result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"


///using arrays 
assertEqual(result, "noma");