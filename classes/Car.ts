class Car {
    // Properties
    // With access modifier: public, private & protected
    private  _make: string;
    private  _color: string;
    private  _doors: number;
    private static numberOfCars: number = 0;  // New static property

    // Constructor
    constructor(make: string, color: string, doors: number = 5) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }

    /**
     * validate doors property before instantiate
     */
    // constructor(make: string, color: string, doors = 4) {
    //     this._make = make;
    //     this._color = color;
    //     if ((doors % 2) === 0) {
    //         this._doors = doors;
    //     } else {
    //         throw new Error('Doors must be an even number');
    //     }
    // }
    // Accessors
    get make() {
        return this._make;
    }

    set make(make) {
        this._make = make;
    }

    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if (doors % 2 === 0) {
            this._doors = doors;
        } else {
            throw new Error("Doors must be an even number");
        }
    }

    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is acceleration to ${speed} Mph.`;
    }

    brake(): string {
        return `${this.worker()} is braking with the standard breaking system.`;
    }

    turn(direction: "left" | "right"): string {
        return `${this.worker()} is turning ${direction}}`;
    }

    worker(): string {
        return this._make;
    }

    public static getNumberOfCars(): number {
        return Car.numberOfCars;
    }
}

let auto = new Car("run", "red");
console.log(auto.doors);
console.log(Car.getNumberOfCars());