function Person(name, age) {
  this.name = name;
  this.age = age;
  this.pets = [];
  this.books = [];
  this.exercised = 0;

  this.canVote = function() {
    return this.age > 18;
  };

  this.readBook = function(book) {
    this.books.push(book);
  };

  this.exercise = function() {
    this.exercised += 1;
  };

  this.isActive = function() {
    return this.exercised >= 2;
  };

  this.isAvidReader = function() {
    return this.books.length === 3;
  };
}

module.exports = Person;
