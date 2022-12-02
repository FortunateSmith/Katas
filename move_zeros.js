// Move all zeros to end of array

function moveZeros(arr) {
  const zeros = arr.filter(z => z === 0) 
  const everythingElse = arr.filter(n => n !== 0)
  return everythingElse.concat(zeros)

}

moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0]); // returns[false,1,1,2,1,3,"a",0,0]
moveZeros([ 3, null, 6, '1', 0, 2, '5', {}, '3', {}, 0, '5', {}, 6, '7', 2 ]);
