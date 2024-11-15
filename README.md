# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @mahe045/lotide`

**Require it:**

`const _ = require('@mahe045/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(head)`: A commonly used function for arrays is to retrieve the first element from the array. This is often referred to as the "head" of the array.
- `function2(tail)`: The tail is not the last element of the array. The tail is meant to be every element except the head (first element) of the array.
- `function3(middle)`: take in an array and return the middle-most element(s) of the given array.
- `function4(assertArraysEqual)`: if arrays when comapred are equal or not equal to one another
- `function5(assertEqual)`: if strings and numbers when compared are or are not equal to each other
- `function6(assertObjectsEqual)`: if objects are or are not equal to each other
- `function7(countOnly)`: counts only specfic strings in an array
- `function8(eqArrays)`: comapres if arrays are equal to one another
- `function9(eqObjects)`: comapares if objects are equal to one another 
- `function10(findKey)`: find a specfic key in a function 
- `function11(countLetters)`: like countOnly, counts specfic letters
- `function12(findKeyByValue)`: search for a key on an object where its value matches a given value.
- `function13(letterPositions)`: which will return all the indices (zero-based positions) in the string where each character is found.
- `function14(takeUntil)`: takes in values in a function until it returns false
- `function15(without)`: creates an array excluding, for comparison
