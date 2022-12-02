function queueTime(customers, n) {
  let totalTime = 0;

  if (n === 1) {
    totalTime = customers.reduce((a, b) => a + b, totalTime)
    console.log(totalTime);
  }
  if (n >= 2) {
    
  }

  return totalTime;
}

queueTime([], 1)
//  0;
queueTime([1,2,3,4], 1)
// 10;
queueTime([2,2,3,3,4,4], 2)
// 9;
queueTime([1,7,3,4,5], 3)
// 8;