/* DESCRIPTION:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"([])"              =>  true
")(())"          =>  false
"([))"          =>  false
"{"               =>  false
"()[[{}()]()]"    =>  true
*/

function validString(string) {
  let tracker = [];
  let array = string.split("");

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(" || array[i] === "[" || array[i] === "{") {
    }
  }
}


