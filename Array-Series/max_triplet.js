
function maxTriSum(numbers){
  // find three largest int (no repeats) sum
  // find duplicates 
  // sort/slice/sum

  let sortedNum = numbers.sort((a, b) => a - b)

  let result = sortedNum.filter((item, index) => sortedNum.indexOf(item) === index).splice(-3, 3).reduce((a,b) => a + b);


  

  return result;

  // for (const number in sortedNum) {
  //   console.log(sortedNum[number])
  // }

}

// maxTriSum([3,2,6,8,2,3]);
console.log('first', maxTriSum([2,9,13,10,5,2,9,5]));
console.log('second', maxTriSum([2,1,8,0,6,4,8,6,2,4]));
//doubles: [ 0, 1, 2, 4, 6, 8 ]
