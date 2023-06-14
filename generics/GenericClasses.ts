class processIdentity1<T, U> {
    private _value: T;
    private _message: U;

    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }

    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}

let processor2 = new processIdentity1<number, string>(100, 'Hello');
processor2.getIdentity();      // Displays 'Hello'