// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// function DNAStrand(dna) {
//   console.log(dna);
//   let str = "";
//   let result = "";
//   let complement = "";
//   for (let i of dna) {
//     if (i === "A") {
//       complement = "T";
//     } else if (i === "T") {
//       complement = "A";
//     } else if (i === "C") {
//       complement = "G";
//     } else {
//       complement = "C";
//     }
//     result += complement;
//   }
//   return result;
// }


function DNAStrand(dna) {
  let pairs = {A: "T", T: "A", G: "C", C: "G"}
  console.log(dna.replace(/./g, c => pairs[c]))
  // return dna.
}


DNAStrand("ATATGGCC");
const first = "Cillian";
const second = "Vincent"
const word = `My second son's name is Cillian`;
console.log(word)
console.log(word.replace(/Cillian/g, l => "Vincent"))
