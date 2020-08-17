const Person = require("./person");
const Pets = require("./pets");

const people = [
  { name: "Gary", age: 24 },
  { name: "Gina", age: 18 },
];

const pet = [
  {species: 'Dog', petName: 'Oliver', favoriteFood: `Lilly's kitchen`, favoriteToy: 'Doughnut', noise: 'Woof' }
];

for (let i = 0; i < people.length; i++) {
    const person = new Person(people[i].name, people[i].age, pet[i].petName);
    for(let j = 0; j < pet.length; j++){
      const pet = new Pets(pet[j].species, pet[j].petName, pet[j].favoriteFood, pet[j].favoriteToy, pet[j].noise);
      console.log(pet.adoptPet());
    }
    console.log(person.canVote());
    console.log(person.isActive());
    person.readBook("a");
    person.readBook("b");
    person.readBook("c");
    console.log(person.isAvidReader());
    console.log(person.canVote());
    console.log(person.toString());
    
}
