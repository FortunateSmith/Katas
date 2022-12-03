function user(name, age, favoriteFood, smokes) {
 
  return {
    name: name,
    age: age,
    favoriteFood: favoriteFood,
    smokes: [smokes ? "does" : "doesn't"],
    details: function() {
      console.log(`${name} is ${age} years old. His favorite food is ${favoriteFood} and he ${smokes} smoke.`)
    }
}
}
const user1 = user("Richard the Trowel", 42, "pizza", false );

user1.details();
