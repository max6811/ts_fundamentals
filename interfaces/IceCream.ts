interface SampleInterface {
    name: string; //required
    age?: number; //optional
    readonly tall: number; //read Only
}

export interface IceCream {
    readonly flavor: string;
    scoops: number;
    instructions?: string;
}

export interface Sundae extends IceCream {
    sauce: "chocolate" | "caramel" | "strawberry";
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}

export interface IceCreamArray {
    [index: number]: string;
}
