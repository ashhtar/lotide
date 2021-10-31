// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// eqObjects.js starts
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// assertEqual({ a: "1", b: "2" }, { b: "2", a: "1" })
const eqObjects = function(x, y) {
  if (Array.isArray([x]) && Array.isArray([y])) {
    eqArrays(x,y);
  } else {
  const ok = Object.keys, tx = typeof x, ty = typeof y;
  return x && y && tx === 'object' && tx === ty ? (
    ok(x).length === ok(y).length &&
      ok(x).every(key => eqObjects(x[key], y[key]))
  ) : (x === y);
  }
};

// TESTER provided by Compass
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

//IMPORTED eqArrays
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