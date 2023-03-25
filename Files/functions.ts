// # Functions
// Things to keep in mind while creating functions in TypeScript

// In the case of variables :_datatype is optional since it infers the type nicely but in case of functions :_datatype is compulsory.
// In this case we can even assign the num to string or anything as it is any:
// But any is a problem in typescript according to the scenario sometimes you might need to use any and sometimes you might not but you need to avoid it as much as possible and not use it until its necessary, because using any all the time will destroy the meaning of typescript and it will be the same as writing plain javascript
// function addTwo(num) {
//   return num + 2;
// }

// addTwo(8);

// export {};

// To do a simple fix for this you can just function addTwo (num: number){}

// Example 1:
// function addTwo(num: number) {
//   return num + 2;
// }

// addTwo(8);

//  Example 2:
// function getUpper(value: string) {
//   return value.toUpperCase();
// }

// getUpper("wayne");

// Example 3:
// function signUpUser(name: string, email: string, isPaid: boolean) {
//   console.log(signUpUser);
// }

// signUpUser("wick", "wick@gmail.com", false);

// Example 4:

// let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// loginUser("wayne", "wayne@gmail.com");
// How to not just give the values of name and email and not provide value for isPaid since these cases might rise up while writing a program
// It is simply by providing a default value which is isPaid : boolean = false

// Example for a possible problem

// function addTwo(num: number) {
// return num + 2;
// What if i write return "TypeScript" instead of the number nothing is stopping me from doing that
//   return "TypeScript";
// }

// let myValue = addTwo(8);

// export {};

// ! How to return more accurate value from a function
// # A better way to write functions

// function addTwo(num: number) {
// return num + 2;
// What if i write return "TypeScript" instead of the number nothing is stopping me from doing that return "TypeScript";
//   return "TypeScript";
// }

// let myValue = addTwo(8);

// export {};

// A simple fix for the problem mentioned above is to add :_datatype of the value you want to return
// function addTwo(num:number):number{}

// function addTwo(num: number): number {
//   return num + 2;
// return "TypeScript"; // This will throw an error
// }

// let myvalue = addTwo(8);

// You can return more than one datatypes from a function
// The fix mentioned above isn't going to work for this use case as you have to return different datatypes
// function getValue(myValue: number) {   this says the returned value can either be boolean true | "200 ok"
//   if (myValue > 5) {
//     return true;
//   }
//   return "200 ok";
// }

// Syntax for doing the same fix of :_datatype for returned value in arrow functions
// const getHello = (s: string): string => {
//   return "TypeScript";
// };

// const heroes = ["Black Panther", "IronMan", "Spiderman"];
// If i change the values inside heroes to numbers
// TypeScript is smart enough to change the datatype of ((hero)=>{}) inside heroes.map
// If you want perfect syntax sure you can go on and use :_datatype but it is not necessary
// But one thing we need to be careful about is what is the return type of this method

// heroes.map((hero): string => {
//   return `The heroes are ${hero}`;
// });

// function consoleError(err: string): void {
//   console.log(err);
// }

// This is used to specifically  handle errors
// Use :never while handling errors as it is recommended in guidelines in TypeScript
// This is forceful termination of the program
// function handleError(handle: string): never {
//   throw new Error(handle);
// }

// export {};

// 1:15:33

// The let keyword being changed into var after the code is compiled can be changed in typescript config file.
