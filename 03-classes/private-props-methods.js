class Figure {

    #area = 0; // If we need to set a private property, only put this symbol # before the name.

    constructor (base = 0, high = 0){
        this.base = base;
        this.high = high;

        this.#area = base * high

    }

    #takeArea (){ // If we need to set a private method, only put this symbol # before the name.
        console.log(this.#area * 2);
    }
}

const square = new Figure(10,15);
Figure.#area = 200;                 // Uncaught SyntaxError: Private field '#area' must be declared in an enclosing class.
console.log(square.takeArea());     // Uncaught TypeError: square.takeArea is not a function

console.log(square);


// * SUMMARY :

/* The private properties, methods, getters and setters can't be used outside enclosure scope of the class.*/