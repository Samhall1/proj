class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.pets = [];
    this.books = [];
    this.exercised = 0;
  }  

  canVote() {
    return this.age > 18;
  };

  readBook(book) {
    this.books.push(book);
  };

  exercise() {
    this.exercised += 1;
  };

  isActive() {
    return this.exercised >= 2;
  };

  isAvidReader() {
    return this.books.length === 3;
  };
}

module.exports = Person;
