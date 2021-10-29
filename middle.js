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
// assertEqual(eqArrays([3, 1, 2], [3, 5, 1]), true); // => should PASS

const assertArraysEqual = function (x, y) {
  if (eqArrays(x, y)) {
    console.log(`✅✅✅ Assertion Passed: ${x} === ${y}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${x} !== ${y}`);
  }
};

// assertArraysEqual([0, 1, 2], [0, 1, 2]);

// Middle.js
const middle = function (array, ind = 0) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array[ind]) {
    return middle(array, ++ind);
  };
  return ind % 2 !== 0 ? [array[(ind - 1) / 2]] : [array[(ind / 2) - 1],
  array[ind / 2]];
};



/*   if (i * 2 + 2 in array) {
    return middle(array, i + 1);
  } else if (array.length === 1 && array.length === 2) {
    return [];
  } else if (array.length % 3 === 0) {
    return array[i];
  } else if (array.length % 2 === 0) {
    return array[i]
  } */

console.log(middle([1, 2]))
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]