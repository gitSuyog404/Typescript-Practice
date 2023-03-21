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

// # "any" keyword
// It is not a special type
// It is used whenever we don't want a particular value to cause typecheckign errors.
// Don't use "any" as it is not a good practice in typescript
// "any" is used to get away from the syntax of typescript
// When typescript doesn't know what value will be assigned in the future , it will put that as  "any"

// When you don't specify a type, and TypeScript can't infer it from context, the compiler will typically default to any.
// You usually want to avoid this, though, because any isn't type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.

// There is a setting in TypeScript config file that we can go for noImplicitAny that will prevent us from using any

//  Example:
// let hitMan;

// function getHitMan() {
//   return "John Wick";
// }

// hitMan = getHitMan();

// export {};

// ! In this case another developer can assign values of different datatype than we expected which can ruin the consistency of the program so in these cases we should use  : _datatype

// let hitMan: string;

// And the function shouldn't be defined like this the function should have more values for strict checking or definition.
// function getHitMan() {
//   return "John Wick";
// }

// hitMan = getHitMan();

// export {};
