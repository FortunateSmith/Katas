function person(firstName, lastName, age, gender, employed, occupation, married) {
  return {
    firstName,
    lastName,
    age,
    gender,
    employed,
    occupation,
    married,
    sayName: function(){
      return `${firstName} ${lastName}`
    },
    introduce: function() {
      return `Hello, my name is ${this.sayName()}.  I am ${age} years old.  I am a ${gender}.`
    },
  }
}

const firstPerson = person("Liam", "Smith", 42, "male", "semi-employed", "musician", "married")