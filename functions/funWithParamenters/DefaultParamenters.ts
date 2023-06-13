
/**
 * In this example, x is required and y is optional. If a value isn't passed to y, the default value is 25.
 * @param x 
 * @param y 
 * @returns 
 */
function addNumbers (x: number, y = 25): number {
    return x + y;
 }
 
 addNumbers(1, 2);  // Returns 3
 addNumbers(1);     // Returns 26