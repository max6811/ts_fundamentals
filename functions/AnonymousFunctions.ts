
/**
 * Function expressions are created at runtime and must be declared before they can be called. 
 * hey aren't hoisted,
 * @param x 
 * @param y 
 * @returns 
 */
let addNumber = function (x: number, y: number): number {
    return x + y;
};
addNumber(1, 2);

let sum = function (input: number[]): number {
    let total: number = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};

console.log(sum([1, 2, 3]));
