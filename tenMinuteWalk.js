// function isValidWalk(walk) {
//   let lat = 0;
//   let long = 0;

//   if (walk.length === 10) {
//     console.log(walk);
//     for (d of walk) {
//       if (d === "n") {
//         lat++;
//       }
//       if (d === "s") {
//         lat--;
//       }
//       if (d === "e") {
//         long--;
//       }
//       if (d === "w") {
//         long++;
//       }
//       console.log(long, lat);
//     }
//     if (lat !== 0 || long !== 0) {
//       return false;
//     } else {
//       return true;
//     }
//     //     return false;
//   } else {
//     return false;
//   }
// }

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let lat = 0;
  let long = 0;

  for (let d of walk) {
    switch (d) {
      case 'n':
        lat++;
        break;
      case 's':
        lat--;
        break;
      case 'e':
        long++;
        break;
      case 'w':
        long--;
        break;
      default:
        break;
    }
  }
  return lat === 0 && long === 0;
}
isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s", "e"]);
// isValidWalk(['n','n','n','s','n','s','n','s','n','s']);
