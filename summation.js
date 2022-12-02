var summation = function (num) {
  // let acc = 0
  let sum = num;
  
  while (num > 1) {
    sum += (num-1);
    console.log("sum in loop:", sum)
    // acc += 
    num -= 1;
    console.log("num", num)
  }
  return sum;
  // console.log(sum);

//   if (num === 1) {
//     sum = 1;
//     console.log(sum);
//     return sum;
//   }
//   while (num >= 1) {
//     // if number is greater than 1, sum is num + (num-1)
    
    
//     sum = num + (num - 1);
//     console.log("SUM", sum)
//     num -= 1;
//     console.log(num);
// }
// console.log("finale", sum)
//   return sum;

}

// summation(1);
// summation(2);
// summation(7);
summation(5);