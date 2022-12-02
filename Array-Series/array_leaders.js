// leader: an integer which is greater than all integers to its right.
// final integer always a leader

/////////// STUMPED!!! //////////////

function arrayLeaders(numbers) {
  let acc = numbers[numbers.length - 1];
  let leaders = [acc];
  // console.log("leaders: ", leaders);
  let sum = 0;
  
  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log("numbers[i]: ", numbers[i]);
    console.log("sum: ", sum)
    if (numbers[i] > acc) {
      sum += numbers[i]
      acc = numbers[i];
      console.log("acc: ", acc);
      leaders.push(numbers[i])
      leaders.reverse();
      console.log("After filter: ", leaders);
    }
  }
  return leaders;
}

// arrayLeaders([1,2,3,4,0]);
arrayLeaders([16, 17, 4, 3, 5, 2]);
