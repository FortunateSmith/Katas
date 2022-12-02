function isPalindrome(x) {
  const word = x.toLowerCase();

  if (x.length === 1) {
    return true;
  } else if (word === word.split("").reverse().join("")) {
    return true;
  }
}

console.log(isPalindrome("a"));
console.log(isPalindrome("aba"));


// //////////////////////////////////////////////////
// Good Solution

// const isPalindrome = (x) => {
//   return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }