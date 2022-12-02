function jumpingFrog(lilyPads) {
  let jumps = 0;
  let i = 0;

  while (typeof lilyPads[i] !== 'undefined') {
    
    jumps++;
    i += lilyPads[i]

    if(jumps > lilyPads.length) {
      jumps = -1;
    }
    console.log(lilyPads[i])
  }
  console.log("Jumps", jumps)
  return jumps;
}

jumpingFrog([1,3,1,2,-2,1]);