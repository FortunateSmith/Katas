function highestRank(arr) {
  let count = arr.reduce(function (val, val2) {
    return val[val2] ? ++val[val2] : (val[val2] = 1), val;
  }, {});

  let res = Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));

  return Number(res);
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])


// Clever Answer
// function highestRank(arr) {
//   var getNum = num => arr.filter(n => n === num).length;
//   return arr.sort((a,b) => getNum(b) - getNum(a) || b - a)[0];
// }