// # Type Narrowing

// function detectType(val: number | string) {
//  Use typeof to create a extra guard abt what kind of variable is coming up
//   if (typeof val === "string") {
//     return val.toLowerCase();
//   }

//   return val + 4;
// }

// function provideId(id: string | null) {
//   if (!id) {
//     console.log("Assign a ID");
//     return;
//   }

//   id.toLowerCase();
// }

// # The in operator narrowing

// interface User {
//   name: string;
//   email: string;
// }

// interface Admin {
//   name: string;
//   email: string;
//   isAdmin: boolean;
// }

// let isAdminAcc = (account: User|Admin) =>{
//     if("isAdmin" in account){
//         return account.isAdmin
//     }
// }

// ! These topics also fall under narrowing
// # Instanceof and Type Predicates
// # instanceof narrowing
// it can only be used where there is a new keyword or has a potential of having a new keyword
// It is almost the same as typeof
// typeof checks for the default types and instanceof checks whether an object was an instance of the class
// let logValue = (x: Date | string) => {
//   if (x instanceof Date) {
//     console.log(x.toUTCString());
//   } else {
//     console.log(x.toUpperCase());
//   }
// };

// # type predicates

// type Fish = {
//   swim: () => void;
// };

// type Bird = {
//   fly: () => void;
// };

// let isFish = (pet: Fish | Bird): pet is Fish => {
//   return (pet as Fish).swim !== undefined;
// };

// let getFood = (pet: Fish | Bird) => {
//   if (isFish(pet)) {
// Here typescript is still confused whether the pet is fish or bird so we type cast in the isFish function
//  : pet is Fish      // this declares it not as true value return but a fish which solves the problem of typescript being confused over fish or bird
//     pet;
//     return "fish food";
//   } else {
//     pet;
//     return "bird food";
//   }
// };

// # Discriminated Union and Exhaustiveness CHecking with never

// interface Circle {
//   kind: "circle";
//   radius: number;
// }

// interface Square {
//   kind: "square";
//   side: number;
// }

// interface Rectangle {
//   kind: "rectangle";
//   length: number;
//   width: number;
// }

// type Shape = Circle | Square | Rectangle;

// let getTrueShape = (shape: Shape) => {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
// };

// 4:37:36

// let getArea = (shape: Shape) => {
// Since it causes error it is recommended in the documentation that there should be a default with type never
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;

//     case "square":
//       return shape.side * shape.side;

//     case "rectangle":
//       return shape.length * shape.width;
//     default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// };
