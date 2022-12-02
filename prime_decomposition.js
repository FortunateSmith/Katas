const n = 36;

function primeFactors(n){

  let p = 2;
  if (n === 1) {
    return;
  }
  while (Number.isInteger(n)) {

if (n % 2 === 0 || n % n === 0) {
  if (Number.isInteger(n/p))
  n = n/p
}
    


  console.log(n);
  // primeFactors(p)
}
}

// console.log(5**2)

primeFactors(n);