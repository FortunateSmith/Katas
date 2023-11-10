function findOdd(A) {
  
  let counter = {};
  
  A.forEach(ele => {
    if (counter[ele]) {
      counter[ele] += 1;
    } else {
      counter[ele] = 1;
    }
  })
//     console.log(counter);
  
  for (const [key, value] of Object.entries(counter)) {
    if (value % 2 === 1) {
      return parseInt(key)
    }
  }
}