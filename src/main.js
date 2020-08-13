const Person = require("./person");

const people = [
  { name: "Gary", age: 24 },
  { name: "Gina", age: 18 },
];

for(i = 0; i < people.length; i++) {
    const person = new Person(people[i].name, people[i].age);
    console.log(person.canVote());
    console.log(person.isActive());
    person.readBook("a");
    person.readBook("b");
    person.readBook("c");
    console.log(person.isAvidReader());
    console.log(person.canVote());
}
