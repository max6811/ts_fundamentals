// There are three sets of literal types available in TypeScript: string, number, and boolean.
// By using literal types, you can specify an exact value that a string, number,
// or boolean must have (for example, "yes", "no", or "maybe".)

// The process of going from an infinite number of potential cases to a smaller,
// finite number of potential cases is called narrowing.

type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
// myResult = "failure"; //* Invalid


// TypeScript also has numeric literal types, 
// which act the same as the string literals. For example:
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid