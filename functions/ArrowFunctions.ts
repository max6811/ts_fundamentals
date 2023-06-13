//Lambda or fat arrow functions (=>)

// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
    return x + y;
 }
 
 // Arrow function
 let addNumbers2 = (x: number, y: number): number => x + y;

/**
 * Arrow functions were introduced in ES2015 so not all browsers support them. 
 * By using TypeScript, you can take advantage of these function types and then 
 * transpile down to earlier JavaScript versions, if necessary, so your code will 
 * work with older browsers.
 */
 let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}