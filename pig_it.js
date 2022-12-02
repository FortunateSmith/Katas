// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

const unPigged = "Pig latin is cool !";

function pigIt(str) {
  console.log(str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  }));
}

// function pigIt(str) {
//   const arrayed = str.split(" ");

//   // const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//   let prePigged = "";
//   let pigArray = [];
//   let pigged;

//   for (let word in arrayed) {
//     if (!/\w/.test(arrayed[word])) {
//       prePigged = arrayed[word];
//       pigArray.push(prePigged);
//     } else {
//       const letter = arrayed[word].charAt(0);
//       const snipped = arrayed[word].slice(1);

//       prePigged = snipped.concat(letter + "ay");
//       pigArray.push(prePigged);
//     }

//     pigged = pigArray.join(" ");
//   }
//   console.log(pigged);
//   return pigged;
// }

pigIt(unPigged);
