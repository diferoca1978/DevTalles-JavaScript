//* CLASS WITH ATTRIBUTES

class Character1 {
  name;
  lastName;
  identity;

  constructor(name, lastName, identity) {
    this.name = name;
    this.lastName = lastName;
    this.identity = identity;
  }
}

const spiderman1 = new Character1('Peter', 'Parker', 'Spiderman');
const iromMan1 = new Character1('Toni', 'Stark', 'IronMan');

//console.log(spiderman1, iromMan1);

//* METHODS IN THE CLASS

class Character2 {
  name;     //Property without define (undefined)
  lastName; //Property without define (undefined)
  identity; //Property without define (undefined)
  motto; //Property without define (undefined)

  constructor( // Through the contructor we can pass as a parameter the properties thath we can assingne a value or to change it if have a value assigned.
    name,         
    lastName, 
    identity, 
    motto,  
  ) 
  {
    this.name = name;
    this.lastName = lastName;
    this.identity = identity;
    this.motto = motto;
  }
  // Methods.
  
  whoIs () {
    console.log(`I'm ${this.name} ${this.lastName} and my secret identity is: ${this.identity}`);
  }

  watchword () {
    this.whoIs()
    console.log(`My motto is: ${this.motto}`);
  }
}

const spiderman2 = new Character2('Peter', 'Parker', 'spiderman', 'With great power comes great responsibility');
const iromMan2 = new Character2('Toni', 'Stark', 'Iron man', 'I am Iron Man');

//spiderman2.watchword()
//iromMan2.watchword()


//* SET && GET.


class Character3 {
  name;     //Property without define (undefined)
  lastName; //Property without define (undefined)
  identity; //Property without define (undefined)
  motto; //Property without define (undefined)

  constructor( // Through the contructor we can pass as a parameter the properties thath we can assingne a value or to change it if have a value assigned.
    name,         
    lastName, 
    identity, 
    motto,
    food,  
  ) 
  {
    this.name = name;
    this.lastName = lastName;
    this.identity = identity;
    this.motto = motto;
  }

  // Set

  set setFavouriteFood(food){
    this.food = food.toUpperCase()
  }

  // Get

  get getFavouriteFood (){
    return `${this.identity} favourite food is ${this.food}`
  }

  // Methods.
  
  whoIs () {
    console.log(`I'm ${this.name} ${this.lastName} and my secret identity is: ${this.identity}`);
  }

  watchword () {
    this.whoIs()
    console.log(`My motto is: ${this.motto}`);
  }
}

const spiderman3 = new Character3('Peter', 'Parker', 'spiderman', 'With great power comes great responsibility');
//const iromMan3 = new Character3('Toni', 'Stark', 'Iron man', 'I am Iron Man');

//spiderman3.watchword()
//iromMan3.watchword()

spiderman3.setFavouriteFood = `Cherry pie by aunt May`
//console.log(spiderman3);

console.log(spiderman3.getFavouriteFood);
console.log(spiderman3);

//* PROPERTIES, METHODS, GETTERS AN SETTERS STATIC.

class Animal {

  static sayGoodbye() {
    return "Goodbye";
  }

  talk() {
    return "Cuak";
  }
}

console.log(Animal.sayGoodbye()); // Static method (does not require an instance). Response: 'Goodbye'
Animal.talk();                    // Uncaught TypeError: Animal.talk is not a function

const duck = new Animal();        // We create an instance of the class

duck.sayGoodbye();                // Uncaught TypeError: duck.saygoodbye is not a function
console.log(duck.talk())          // Not static method (require an instance). Response: 'Cuak'