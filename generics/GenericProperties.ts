/**
 * If you add the statement let result: T = value + value to the identity function,
 * TypeScript raises the error The left-hand side of an arithmetic operation must
 * be of type 'any', 'number', 'bigint' or an enum type because it doesn't know what
 * value will be passed to it at runtime. If you were to pass a non-numeric value,
 * the expression would generate an error, so TypeScript makes you aware of the
 * problem at compile time.
 */

function identity<T, U>(value: T, message: U): T {
    let result: T = value + value; // Error
    console.log(message);
    return result;
}

/**
 * Using generic constraints to limit types
 */

type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U): T {
    let result: T = value + value; // Error
    console.log(message);
    return result;
}

let returnNumber = identity<number, string>(100, "Hello!"); // OK
let returnString = identity<string, string>("100", "Hola!"); // OK
let returnBoolean = identity<boolean, string>(true, "Bonjour!"); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

/**
 *
 * You can also constrain a type to the property of another object.
 * This example uses extends with the keyof operator, which takes an object type
 * and produces a string or numeric literal union of its keys. Here, K extends keyof T,
 * ensuring that the key parameter is of the correct type for type assigned to pet.
 */

function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };

console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error

/**
 * Using type guards with generics
 */

// type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;

    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }

    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

    return result
}

let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');

console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100

/**
 * Note
 * You can only use a typeof type guard to check the 
 * primitive types string, number, bigint, function, boolean, symbol, object, and undefined. 
 * To check the type of a class, use an instanceof type guard.
 * https://learn.microsoft.com/en-us/training/modules/typescript-generics/3-use-methods-properties-generic-type 
 */
