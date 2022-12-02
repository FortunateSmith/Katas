// create function that returns milliseconds past midnight
// inputs are hours, minutes, seconds

function past(h, m, s) {
  let result = (s * 1000) + (m * 60000) + (h * 3600000);
  console.log(result)
  return result;
}

past(0, 1, 1);
past(1, 0, 1);
