const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // TEST CODE FOR ABOVEs
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);

  //countLetters function starts here

  const countLetters = function (string) {
    const results = {};

    for (const letter of string) {
        if (letter === " ") {
            continue;
        } else if (results[letter]) {
          results[letter] += 1;
        } else {
          results[letter] = 1;
        }
      }
      return results
    }
   
    console.log(countLetters("lighthouse in the house"));