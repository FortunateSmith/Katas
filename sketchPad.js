const numSet = [1, 12, 54, 46, 4, 2, 8, 75, 7];

// function smallestNum(arr) {
//   console.log(arr.filter(n => (n - 20) > 30));
// }

// smallestNum(numSet);

// function oddsSquared(arr) {
//   // let numFiltered = arr.filter(n => n % 2 === 1);
//   // console.log(numFiltered)
//   let squared = arr.filter(n => n % 2 === 1).map(a => a * a);
//   console.log(squared)
// }

// oddsSquared(numSet);

const guitarist = {
  "01": {
    name: "Jimmy Page",
    famousGuitar: "Gibson SG Double Neck",
    famousRiff: "Heartbreaker",
    band: "Led Zeppelin",
  },
  "02": {
    name: "John Frusciante",
    famousGuitar: "Fender Stratocaster",
    famousRiff: "Suck My Kiss",
    band: "Red Hot Chili Peppers",
  },
  "03": {
    name: "Jeff Beck",
    famousGuitar: "unknown",
    famousRiff: "Goodbye Pork Pie Hat",
    band: "Jeff Beck",
  },
};

// console.log(guitarist);
guitarist["01"].famousRiff = "Kashmir";

// console.log("altered", guitarist[01]);
const spread = {
  ...guitarist,
  "04": {
    name: "George Harrison",
    famousGuitar: "Gretsch",
    famousRiff: "While My Guitar Gently Weeps",
    band: "The Beatles"
  },
};
console.log(spread);
for (const p in spread) {
  console.log(spread[p].name)
}
