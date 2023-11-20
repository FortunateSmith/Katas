// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

function combine(...objects) {
  let result = {};

  objects.forEach((obj) => {
    for (const key in obj) {
      if (result.hasOwnProperty(key)) {
        result[key] += obj[key];
      } else {
        result[key] = obj[key];
      }
    }
  });
  console.log(result);
  return result;
}

combine(objA, objB); // { a: 13, b: 20, c: 36, d: 3 }
combine(objA, objC, objD) // { a: 15, b: 20, c: 30, d: 11, e: 8 }

// Clever answer from CodeWars

// const combine = (...params) => params.reduce((a, b) => {
//   for (const x in b) { a[x] = x in a ? a[x] + b[x] : b[x] };
//   return a;
//  }, {});
