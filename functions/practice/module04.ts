
/**
 * Exercise 1: Convert a JavaScript function to TypeScript with strongly typed parameters and return types
 */
type compareFunctionType = (a: number, b:number) => number;

function buildArray(
    items: number,
    sortOrder: "ascending" | "descending"
): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;

    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }

    if (sortOrder === "ascending") {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
}

let sortDescending:compareFunctionType = (a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
};

let sortAscending:compareFunctionType = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
};

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');
console.log(myArray1);
console.log(myArray2);

/**
 * Exercise 2: Convert a JavaScript function to a TypeScript using optional parameters
 */

function loanCalculator (principal: number, interestRate: number, months = 12): string {
    let interest: number = interestRate / 1200;   // Calculates the monthly interest rate 
    let payment: number;
    payment = principal * interest / (1 - (Math.pow(1/(1 + interest), months)));
    return payment.toFixed(2);
}

let myLoan = loanCalculator(1000, 5);
console.log(myLoan);