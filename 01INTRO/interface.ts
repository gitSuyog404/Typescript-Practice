// # Interface
// It is very similar to type
// It is like a class
// keyword "interface"
// You get inheritance in Interface

// interface User {
//   readonly dbID: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   startTrial: () => string;
// Another way of making this method
//   startTrial(): string;

//   getCoupon(couponname: string, value: number): number;
// }

// const bruce: User = {
//   dbID: 1245,
//   email: "wayne@gmail.com",
//   userId: 1239874350,

//   startTrial: () => {
//     return "BATMAN";
//   },

//   getCoupon: (name: "John Wick", off: 10) => {
//     return 10;
//   },
// };

// if you want to add something in the interface you created you can do that by reopening it separately

/*
    interface User{
        githubToken: string;
    }
*/

// One benefit of using interface is you can use inheritance

// Example:

// interface User {
//   readonly dbID: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   startTrial: () => string;
// Another way of making this method
//   startTrial(): string;

//   getCoupon(couponname: string, value: number): number;
// }

// interface User {
//   githubToken: string;
// }

// interface Admin extends User {
//   role: "admin" | "ta" | "learner";
// }

// const bruce: Admin = {
//   githubToken: "GITHUB",
//   dbID: 1245,
//   email: "wayne@gmail.com",
//   userId: 1239874350,
//   role: "admin",

//   startTrial: () => {
//     return "BATMAN";
//   },

//   getCoupon: (name: "John Wick", off: 10) => {
//     return 10;
//   },
// };
