var Car = /** @class */ (function () {
    // Constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 5; }
        this._make = make;
        this._color = color;
        this._doors = doors;
    }
    Object.defineProperty(Car.prototype, "make", {
        // Accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if (doors % 2 === 0) {
                this._doors = doors;
            }
            else {
                throw new Error("Doors must be an even number");
            }
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is acceleration to ").concat(speed, " Mph.");
    };
    Car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard breaking system.");
    };
    Car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction, "}");
    };
    Car.prototype.worker = function () {
        return this._make;
    };
    return Car;
}());
var auto = new Car("run", "red");
console.log(auto.make);
