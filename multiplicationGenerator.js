function* generator(a) {
  let b = 1;
  while (b <= 10){
    let res = a * b;
    yield `${a} x ${b} = ${res}`
    b++;
  }
}

generator(40);