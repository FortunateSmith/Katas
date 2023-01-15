// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let result;
  let output = num;
  //  step 1: arg to string
  let numStr = num.toString();
  // step 2: string to array
  let numStrArr = Array.from(numStr);
  // console.log(numStrArr);
  //  step 3: array elements to Number
  let numArr = numStrArr.map(Number);
  // console.log(numArr);
  //reduce
  console.log(output)
  if (numArr.length === 1) {
    result = output;
  } else {
    output = numArr.reduce((a, b) => a * b);
    // num = output;
    persistence(output);
}
return result;
  // let output = 0;
  
  // if (num > 9 || num < 0) {
  //   const numStr = num.toString()
  //   output = Array.from(numStr).map(Number).reduce((a, b) => a * b);
  //   // console.log(output)
  //   num = output;
  //   persistence(num);
  // } else if (num <= 9) {
  // console.log(num)
  // return num;
  // }
}

console.log(persistence(39));
