function wordsToObject(input) {
  // create array from string input
  let arrInput = input.split(" ");
 
  // let regex = /{(\w+)}([^{]+)(?:{\/\1})?/g
 
  let res = [];
  let strObj;
  
  // const filtered = arrInput.filter((elem, index) => index % 2 === 0 ? {...strObj, name: elem} : {...strObj, id: elem});
  for (let i = 0; i < arrInput.length; i += 2) {
    strObj = "{name: '" + arrInput[i] + "', id: '" + arrInput[i + 1] + "'}"
    // nestedArray.push(strObj);
    res.push(strObj);
  }
  console.log("'[" + res + "]'");
  
  return "'[" + res + "]'"

  // console.log(`${nestedArray}`)
  // return JSON.stringify(nestedArray);
}

wordsToObject("Sine 1 Square 2 Sawtooth 3 Triangle 4")



// CodeWars Answers

// function wordsToObject(input) {
//   return "["+input.replace(/(\S+) (\S+)/g,"{name : '$1', id : '$2'},").slice(0,-1)+"]"
// }


// function wordsToObject(input) {
//   var array = input.split(" ");
//   var result = [];
//   for(var i=0;i<array.length;){
//       var str = "{name : '" + array[i++] + "', id : '" + array[i++] + "'}";
//       result.push(str);
//   }
//   return "[" + result.join(", ") + "]";
// }

// const wordsToObject = input =>
//   `[${(input.replace(/([^ ]+) ([^ ]+)/g, "{name : '$1', id : '$2'},").slice(0, -1))}]`;