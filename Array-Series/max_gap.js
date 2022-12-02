// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap(numbers) {
  const gap = numbers.sort((a, b) => b - a);
  let start = numbers.shift();
  let res = 0;
  // console.log(start)

  console.log("the gap: ", gap)
  for (let i = 0; i < gap.length; i++) {
    if (start - gap[i] > res) {
      res = start - gap[i];
    }
    start = gap[i];
  }
  console.log(res);
}
maxGap([13, 10, 2, 9, 5]); // 4
maxGap([12,-5,-7,0,290]);  // 278
maxGap([13,3,5]); // 8
maxGap([24,299,131,14,26,25]);  // 168




/////////////////////////
// const maxGap = a => Math.max(...a.sort((x, y) => x - y).map((e, i, a) => i > 0 ? Math.abs(e - a[i - 1]) : 0));

////////////////////////////////

// function maxGap (numbers){
//   const sorted = numbers.sort((a, b) => a - b)
//   return sorted.reduce((t, x, i) => sorted[i + 1] - x > t ? sorted[i + 1] - x : t, 0)
// }
