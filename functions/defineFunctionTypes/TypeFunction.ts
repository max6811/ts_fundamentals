/**
 * An interface is better if you want to have the option of extending the function type. 
 * A type alias is better if you want to use unions or tuples.
 */
// Using Type
type calculator = (x: number, y: number) => number;



let addNumberss: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumberss(1, 2));
console.log(subtractNumbers(1, 2));


let doCalculation = (operation: 'add' | 'subtract'): calculator => {
    if (operation === 'add') {
        return addNumberss;
    } else {
        return subtractNumbers;
    }
}

console.log(doCalculation('add')(1, 2))

// Using Interface
// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}

let addNumbers4: Calculator = (x: number, y: number): number => x + y;
let addNumbers5: Calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers6: Calculator = (num1, num2) => num1 + num2;