
/**
 * Rest parameters are treated as a boundless number of optional parameters. 
 * You may leave them off or have as many as you want.
 * @param firstNumber 
 * @param restOfNumbers 
 * @returns 
 */
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
 }

 addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5