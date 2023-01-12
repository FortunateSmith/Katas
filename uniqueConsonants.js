// UNSUCESSFUL 


// count the number of unique consonants

function countConsonants(str) {
  let counter = new Set(str.toLowerCase().replace(/[^a-z][a,e,i,o,u]/g,"")).size
  console.log(counter);
  return counter
  }


  // return new Set(str.toLowerCase().replace(/[^a-z]|[aeiou]/g,"")).size

  console.log(countConsonants("sillystring"));
  countConsonants("sillyString")