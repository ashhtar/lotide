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

const assertEqualArrays = function (x, y) {
  if (eqArrays(x, y)) {
    console.log(`✅✅✅ Assertion Passed: ${x} === ${y}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${x} !== ${y}`);
  }
};

assertEqualArrays([0, 1, 2], [0, 1, 2]);






const without = function (source, itemsToRemove) {
  const uncommon = source.filter(function (obj) { return itemsToRemove.indexOf(obj) == -1; });
  console.log(uncommon);
};

/*  function except(array, excluded) {
   let newArr, temp, temp1;
 
   check1 = source.filter(function (value) {
     return itemsToRemove.indexOf(value) == -1;
 
   });
 
   check2 = itemsToRemove.filter(function (value) {
     return source.indexOf(value) == -1;
 
   });
 
   output = check1.concat(check2);
 
 
   return output;
 
 }; */

//so the output would be => [ 3, 4, 5, 6, 78, 9 ]

console.log(without([1, 2, 90], [1, 2, 6]));