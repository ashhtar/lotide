// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function (x) {
  return !x[0];
};

// TEST CODE
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); */
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the retFurn value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!