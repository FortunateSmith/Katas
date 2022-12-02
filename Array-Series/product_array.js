////////
// map through array, for each number of array multiply all array numbers together then divide by current number




// function productArray(numbers) {
// const product = numbers.map(x => numbers.reduce((a, b) => a * b) / x)
// console.log(product)
// }
// // productArray([13, 10, 5, 2, 9]);


////////////

function productArray(numbers) {
  let result = [];
  let product;
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    for (let n = 0; n < numbers.length; n++){
      if (i !== n)
      product = (numbers[i] * numbers[n]);
   
      console.log('Pd', product)
    }
    result.push(product)
  }
  console.log('res', result)
  
  return result;
}



productArray([35, 3, 3]);
// [900,1170,2340,5850,1300]
