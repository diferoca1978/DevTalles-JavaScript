class Singleton {

    static instance; 
    name = '';

    constructor (name = ''){

        // The constructor checks if an instance already exists, 
        // In this case, using double negation to convert the expression from undefined or null to Boolean value, because this is the best way to evaluate and to process.

        if (Singleton.instance) {  
            return Singleton.instance;
        }

        // If not instance exist, create one and assign it to Singleton.instance
        Singleton.instance = this;
        // Store name in the instance
        this.name = name;
    };

    getName () {
        return this.name;
    }
}

// Usage:

// Create a new instance.

const instance1 = new Singleton('Peter');
const instance2 = new Singleton('Tony');
const instance3 = new Singleton('Steve');

console.log(instance1.getName());  // Peter
console.log(instance1.getName());  // Peter
console.log(instance1.getName());  // Peter

// The result always will be the first instance no matter how many instances have been created. This is the Singleton pattern!!!
