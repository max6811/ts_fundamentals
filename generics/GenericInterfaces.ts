
/**
 * Declare a generic interface
 */
interface Identity<T, U> {
    value: T;
    message: U;
}

let returnNumber1: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString1: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

/**
 * Declare a generic interface as a function type
 */
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber2 = processor(100, 'Hello!');   // OK
let returnString2 = processor('Hello!', 100);   // Type check error

/**
 * Declare a generic interface as a class type
 */

interface ProcessIdentityClass<T, U> {
    value: T;
    message: U;
    process(): T;
}

class processIdentityClass<X, Y> implements ProcessIdentityClass<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}

let processor1 = new processIdentityClass<number, string>(100, 'Hello');
processor1.process();           // Displays 'Hello'
processor1.value = '100';       // Type check error