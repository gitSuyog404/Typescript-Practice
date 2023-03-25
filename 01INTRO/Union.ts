// # Union types in TS
// When you are in a situation  in which you don't know what type of data is going to come in, it might be number or string etc.
// Instead of using any for this case using union is highly recommmended
// As it is a combination of 2 or more types of data you can inlcude in a variable,array etc.

// It is recommended that you try to keep is very strict
//  _name: _datatype | _datatype = value;
// let score: number | string = 33;

// type User = {
//   name: string;
//   id: number;
// };

// type Admin = {
//   userName: string;
//   id: number;
// };

// let userObj: User | Admin = {
//   name: "WICK",
//   id: 203423324,
// };

// userObj = {
//   userName: "JW",
//   id: 444,
// };

// function getDatabase(id: number | string) {
//   console.log(`The Database id is : ${id}`);
// }

// getDatabase("JOHN WICK");

// function getDatabase(id: number | string) {
// while using  _datatype | _datatype
//  You cannot use methods like .toLowerCase() as in this case as we have defined it as either number or string so Typescript is not just treating it like a number or a string but as a new datatype which can eventually become a number or string so the specific methods for number and string dont apply
//   id.toLowerCase();

//   if (typeof id === "string") {
//     id.toLowerCase();
//   }
// }

// Unions in arrays

// const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const data2: string[] = ["1", "2", "3", "4", "5"];

// syntax for having both types in arrays
// Beginner developers in typescript are prone to making this mistake of :
// const/let _Arrayname: string | number [] = [];      OR
// const/let _Arrayname: string[] | number[] = [];

// But the correct syntax is :
// const data3: (string | number)[] = ["1", "2", "3"];

// To make the value strict
// let pi: 3.14 = 3.14;

// pi = 23.5;  this will give error

// let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "aisle";
// seatAllotment = "crew";
