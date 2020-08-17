class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.pets = [];
    this.books = [];
    this.exercised = 0;
  }  

  canVote() {
    return this.age >= 18;
  };

  readBook(book) {
    let found = false;
    for(let b of this.books){
      if( b.name == book ){
        b.count++
        found = true;
        break;
      }
    }
    if(!found){
      this.books.push({
        name: book,
        count: 1
      })
    }
  };

  adoptPet(pet) {
    let adopted = false;
    for(let p of this.pets){
        if( p.petName == pet ){
            p.count++;
            adopted = true;
            break;
        }
        if(!adopted){
          this.pets.push({
            name: pet,
            count: 1
          })
        }
    }
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


