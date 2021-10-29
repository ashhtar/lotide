// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const eqArrays = function (arr1, arr2) {
  // comparing both arrays using stringify
  if (JSON.stringify(arr1) == JSON.stringify(arr2)) {
    return true;
  }
  else {
    return false
  }
};
// test code
assertEqual(eqArrays([3, 1, 2], [3, 5, 1]), true); // => should PASS

const assertArraysEqual = function (x, y) {
  if (eqArrays(x, y)) {
    console.log(`✅✅✅ Assertion Passed: ${x} === ${y}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${x} !== ${y}`);
  }
};

assertArraysEqual([0, 1, 2], [0, 1, 2]);