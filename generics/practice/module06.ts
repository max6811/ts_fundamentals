class DataStore<T> {
    private _data: Array<T> = new Array(10);

    public get data(): Array<T> {
        return this._data;
    }
    public set data(value: Array<T>) {
        this._data = value;
    }

    GetData(index: number): T {
        if (typeof index === "number") {
            return this._data[index];
        } else {
            throw new Error("The type of index paramenter is not a number.");
        }
    }

    AddOrUpdate(index: number, item: T) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
    }
}

let empIDs = new DataStore<number>();
empIDs.AddOrUpdate(0, 50);
empIDs.AddOrUpdate(1, 65);
empIDs.AddOrUpdate(2, 89);
console.log(empIDs.GetData(0)); // returns 50

type Pets = {
    name: string;
    breed: string;
    age: number
}
let pets = new DataStore<Pets>();
pets.AddOrUpdate(0, { name: 'Rex', breed: 'Golden Retriever', age: 5});
pets.AddOrUpdate(1, { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3});
console.log(pets.GetData(1));         // returns { name: 'Sparky', breed: 'Jack Russell Terrier', age: 3 }
