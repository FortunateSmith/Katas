// find product of highest value integers, number of factors to be multiplied indicated by size

function maxProduct(numbers, size) {
  // console.log(numbers)
  const sort = numbers.sort((a, b) => b - a);
  let product = sort.splice(0, size).reduce((prev, curr) => prev * curr);

  console.log(product);
  return product;
}

maxProduct([4, 3, 5], 2);
maxProduct([8, 6, 4, 6], 3);
maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5);
