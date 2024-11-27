const assertEqual = require("./assertEqual");

const findKeyByValue = function (object, value) {     ///value is the parameter u are trying to find within the object 
  const keys = Object.keys(object); // Get the keys of the object, thast why (object is in keys) //const keys could be named anything, i chose keys

  for (const key of keys) { // Loop through each key //just learned key is defined here, not defined before but you can do it this way 
    if (object[key] === value) { // Check if the value matches
      return key; // Return the key if it matches
    }
  }
  
  return undefined; // Return undefined if no match was found
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);