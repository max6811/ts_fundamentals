import { Employee } from "../Employee";

let employee: Employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    },
};

// employee.firstName = 10; //* Error - Type 'number' is not assignable to type 'string'
console.log(employee.fullName);

/**
 * IceCream example
 */

import { IceCream, Sundae } from "../IceCream";

let myIceCream: Sundae = {
    flavor: "vainilla",
    scoops: 2,
    sauce: "caramel",
    nuts: true,
};

function tooManyScoops(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    } else {
        return "Your order will be ready soon!";
    }
}

console.log(tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "caramel" }));

/**
 * Array index interface
 */
import { IceCreamArray } from "../IceCream";

let myIceCreamArray: IceCreamArray;

myIceCreamArray = ["chocolate", "vanilla", "strawberry"];
let myStr: string = myIceCreamArray[0];
console.log(myStr);
