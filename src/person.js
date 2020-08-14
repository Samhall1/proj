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

    // this.books.push(book);
    // ? 
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
    // let result = {};
    //    for(let i = 0; i < this.books.length; i++){  // ?  This will loop through the books array
    //   const item = list[i];
    //   if(result[item.books]){    // ?  This checks the book if it is true, the code block will be executed 
    //     result[item.books] = result[item.books] + 1; // ? This will increment the result 
    //   } 
    //   else{
    //     result[item.book] = 1;
    //   } 
    //   return result;
    
    // };
   
   
    // ? While loop??
  };

  exercise() {
    this.exercised += 1;
  };

  isActive() {
    return this.exercised >= 2;
  };

  isAvidReader() {
    return this.books.length >= 3;
  };
}


module.exports = Person;


