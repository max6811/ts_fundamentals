/**
 *
 * Generics define one or more type variables to identify the type or types
 * that you will pass to the component, enclosed in angle brackets (< >).
 * (You'll also see type variables referred to as type parameters or generic
 * parameters.) In the example above, the type variable in the function is
 * called <T>. T is a commonly used name for a generic, but you can name it
 * however you wish.
 */
function getArray<G_TYPE>(items: G_TYPE[]): G_TYPE[] {
    return new Array<G_TYPE>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error


/**
 * Using multiple type variables
 */
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'