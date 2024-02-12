// Father Class
class Character1 { 
    name;
    lastName;
    identity;
    watchword;
  
    constructor(name, lastName, identity, watchword) {
      this.name = name;
      this.lastName = lastName;
      this.identity = identity;
      this.watchword = watchword
    }

    whoIs () {
        console.log(`I'm ${this.name} ${this.lastName} and my secret identity is: ${this.identity}`);
      }

  }

  // Child class

  class Hero extends Character1{
    clan;

    constructor(name, lastName, identity, watchword) {
        super(name,lastName,identity, watchword);
        this.clan = 'The Avengers'
    }

    whoIs () {
        console.log(`I'm ${this.name} and I belong to the clan of ${this.clan}`);
        super.whoIs(); // We're using the word super to maintain the behavior as in the father class.
    }
  }
  
  const spiderman = new Hero('Peter', 'Parker', 'Spiderman', 'With great power comes great responsibility');
  // const spiderman = new Hero();
  console.log(spiderman);
  spiderman.whoIs();
