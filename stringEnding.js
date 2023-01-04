function solution(str, ending) {
  let n = ending.length;
  let strEnd = str.slice(-n)
  return strEnd === ending ? true : false;
  }

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

console.log(solution("icing", "ing"));
console.log(solution("wait", "ati"));
