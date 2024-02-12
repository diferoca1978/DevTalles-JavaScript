// Case:
/*
Suppose that we want to create other person but without have to use a new instance,
so maybe we could create a new constructor? No!!! It is not supported by JavaScript.

So, what can we do?
We ca use a static method to create a new instance of (Person) using the constructor 
already exist, but using a different argument.
*/

class Person {

    // Static method that use the constructor and create a new instance of person. 
    static fromObject ({name, lastname, country}) {
        return new Person(name, lastname, country)
    }

    constructor (name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }
    getInfo (){
        console.log(`info : ${this.name} ${this.lastname} from ${this.country}`);
    }
}

const name1     = 'Tony',
      lastname1 = 'Stark',
      country1  = 'usa'

const person1 = new Person(name1,lastname1,country1)
person1.getInfo()

const other = {
    name: 'Diego',
    lastname: 'Rodriguez',
    country: 'colombia'
}

const person2 = Person.fromObject( other )
person2.getInfo()