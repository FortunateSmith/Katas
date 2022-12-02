// function sumPairs(ints, s) {
//   const pair = ints.filter((num) => ints.find((num2) => num2 !== num && num + num2 === s))
//   ;

//   return pair;
// }

function sumPairs(ints, s) {
  
 let pairs = {};
 
 
 for (const i of ints) {
  // console.log(i)
  if ([s - i]) {
    console.log([s - ints[i], ints[i]]);
  } 
 }
  

}
sumPairs([1, 4, 8, 7, 3, 15], 8);

// console.log(sumPairs([1, 4, 8, 7, 3, 15], 23));

// console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));

