// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine() {
  let res = {};
  let sum = 0;
  // loop through arguments
  for (let i = 0; i < arguments.length; i += 2) {
    let templateKeys = Object.keys(arguments[i]);
    let comparisonKeys = Object.keys(arguments[i + 1]);
    console.log(templateKeys, "and", comparisonKeys);

    let matchingKeys = templateKeys.filter(
      (k) => comparisonKeys.indexOf(k) > -1
    );
    // console.log("added values?", addValues);
    // sum = matchingKeys.forEach(elem => templateKeys[elem] + comparisonKeys[elem])
    console.log(sum)
    res = { ...arguments[i], ...arguments[i + 1] };

    // console.log(res);
  }
  return res;
}

combine(objA, objB); // { a: 13, b: 20, c: 36, d: 3 }
// combine(objA, objC) // { a: 15, b: 20, c: 30, d: 11, e: 8 }
