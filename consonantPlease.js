function sortLetters(x) {

  let vowels = /[aeiou]/i
  let c = []
  let v = []
  
  const flatArray = x.flat().filter((a) => typeof a === 'string');
  for (let l of flatArray) {
     vowels.test(l) ? v.push(l.toUpperCase()) : c.push(l.toUpperCase())
//   console.log("v", v, "c", c)
  }
  
  let res = [[...v], [...c]]
  console.log(res)
  return 

}

sortLetters(['e', 'f', 8, 0, 'A', 'i', 'Q', 'B', 'R', 'r', 'S', 'o', 'Y', 'u'])