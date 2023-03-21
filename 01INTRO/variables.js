// Declaring  a variable
// let/var/const keyword _variablename: datatype = value;
// let greetings: string = "Hello TypeScript";
// let myNum = 10;
// console.log(greetings);
// For a temporary fix
// This will remove the error temporarily
// if you write . for methods it will give you string specific methods as suggestions
// export {};
// 39:21
// Emitting with Errors in Typescript docs/handbook/The basics
// How do we define int and float in typescript
// Ans: we dont , we simply call it number and that is how it is being defined and inferred.
// # number
// let userId: number = 33445566;
// # boolean
// let isLoggedIn: boolean = true;
// # Type Inference
// When you are creating a variable and immediately assigning its value at the moment of creating the variable it is not necessary  to:
//  let _variableName : _dataType = value;
// If you want to have more code safety sure we can do this but it is not necessary when we immediately assign the value right after creating the variable
//  you can simply just type let _variableName = value; and the typescript is smart enough to infer the datatype of the value you immediately assigned at the moment of creating the variable so it is redundant to be writing : _datatype when the typescript already inferred its datatype
// So writing the above code in a better practice
// let userId = 1234567;
// let isLoggedIn = true;
// console.log(userId);
// console.log(isLoggedIn);
// export {};
