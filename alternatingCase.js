String.prototype.toAlternatingCase = function () {
  let split = this.split("");
  const toggle = split.map(letter => letter === letter.toLowerCase() ? letter.toUpperCase() :  letter.toLowerCase()).join("")
  console.log(toggle)
  return toggle;
}

"HELLO World".toAlternatingCase()