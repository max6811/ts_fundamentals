
/**
 * Named function declarations are loaded into the execution context before 
 * any code runs. This process is known as hoisting,
 * @param x 
 * @param y 
 * @returns 
 */
function addNumbers (x: number, y: number): number {
    return x + y;
 }
 addNumbers(1, 2);