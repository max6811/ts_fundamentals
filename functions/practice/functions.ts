let addThreeNumbers = (x: number, y: number, z: number): number => x + y + z;

// addThreeNumbers(10, 20) //error Expected 3 arguments but got 2
// addThreeNumbers(10, 20, 30, 40) //error Expected 3 arguments but got 4.
addThreeNumbers(10, 20, 30);


//Optional parameters

/**
 * raises an error because the position of the optional parameters matter.
 * @param x
 * @param y
 * @param z
 * @returns
 */
// let addThreeNumbersOp = (x: number, y?: number, z: number): number => x + y + z;

let addThreeNumbersOp = (x: number, y: number, z?: number): number => {
    if (z === undefined) {
        return x + y;
    } else {
        return x + y + z;
    }
};

addThreeNumbersOp(10, 20);
addThreeNumbersOp(10, 20, 30);


//Default parameters
let subtractThreeNumbers1 = (x: number, y: number, z: number): number => x - y - z;

let subtractThreeNumbers2 = (x: number, y: number, z = 100): number => x - y - z;

subtractThreeNumbers2(10, 20);       // returns -110 because 'z' has been assigned the value 100
subtractThreeNumbers2(10, 20, 15);   // returns -25
