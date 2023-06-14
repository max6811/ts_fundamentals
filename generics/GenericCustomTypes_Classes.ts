class Car1 {
    make: string = 'Generic Car';
    doors: number = 4;
}

class ElectricCar1 extends Car1 {
    make = 'Electric Car';
    doors = 4
}

class Truck1 extends Car1 {
    make = 'Truck';
    doors = 2
}

function accelerate<T extends Car1> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCar1;
accelerate<ElectricCar1>(myElectricCar);

let myTruck = new Truck1;
accelerate<Truck1>(myTruck);

// "All 4 doors are closed."
// "The Electric Car is now accelerating!"
// "All 2 doors are closed."
// "The Truck is now accelerating!"