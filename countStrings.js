// takes object as argument
// returns number of values that are type string
// objects may have nested arrays or objects

function strCount(obj) {
  const objVals = Object.values(obj);
  console.log(objVals);
  let strCount = 0;
  for (const val of objVals) {
    typeof val === "string" ? strCount++ : strCount;
  }
  console.log(strCount);
}

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
  sixth: undefined,
  seventh: {},
});
