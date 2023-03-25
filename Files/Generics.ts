// #Generic
// Syntax -            < >
// We can put any type and it will change the value
// Generics helps to give more type definitions
// TO understand in my own word:
// Instead of using any which causes our code to lose type definitions we use generics
// generics just adjust to the datatypes of the values that are passed in which makes our code more type specific
//  Example:
// The T   can be any word but "T" is mostly used, and it will be replaced with the datatype of the value that is passed
// const last = <T>(arr:T[]):T=>{}

// let a: Array<number> = [];
// let b: Array<string> = [];

// function identityOne(val: boolean | number): boolean | number {
//   return val;
// }

// function identityTwo(val: any): any {
//   return val;
// }

//  Using generics
// function _functionName <_datatype>(_name:_datatype):_datatype{}

// Using "Type" keyword is almost the same as using any
// When you use Type then the value that is passed in is set on the _datatype and the value that the function returns is automatically set to the datatype of the value;
// function identityThree<Type>(val: Type): Type {
//   return val;
// }
// identityThree(3);

// Shortcut for the "Type" keyword
// function identityFour<T>(val: T): T {
//   return val;
// }

// interface Bottle {
//   brand: string;
//   type: number;
// }

// identityFour<Bottle>({});

// function getSearchProducts<T>(products: T[]): T {
//   // do some database operations
//   const myIndex = 3;
//   return products[myIndex];
// }

// Creating the same function in arrow function

// You will see alot generic being defined as syntax <T,>  the "," is to mention that the given <T> is other tags but a generic
// let getSearchProducts = <T>(products: T[]): T => {
// Do some database operations
//   let myIndex = 10;
//   return products[myIndex];
// };
