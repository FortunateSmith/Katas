// find the min sum of each integer product
// multiply largest and smallest
// move inward in int value
// sum products

function minSum(arr) {
  
  const sorted = arr.sort((a, b) => b - a)
  const product = sorted.reduce((prev, curr) => prev + curr * sorted.pop(), 0) 
  return product;
}

////////////////////////////////////////////////////
// function minSum(arr) {
//   const sorted = arr.sort((a, b) => b - a);
//   let product = [];
//   let sum = 0;
//   console.log("Sorted: ", sorted);
//   for (const n in sorted) {
//     if (n) {
//       let sortSplice = sorted.splice(-1);
//       product = [sorted[n] * sortSplice];
      
//       console.log(
//         "n: ",
//         sorted[n],
//         " sortSplice: ",
//         sortSplice,
//         " Product: ",
//         product,
//         " Sum: ",
//         sum
//         );
//       }
//       sum = product.reduce((prev, curr) => prev + curr, sum);
//       console.log(sum)
//   }
//   return sum;
// }

console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));
console.log(minSum([12,6,10,26,3,24]));

// Cleverly doiing what I clumsily did...
// const minSum = arr =>
//   arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);



//******************** */
// function minSum(arr) {
//   var res=0;
//   arr = arr.sort((a,b)=>a-b);
  
//   while(arr.length){
//     res += arr.pop()*arr.shift();
//     }
  
//   return res
// }