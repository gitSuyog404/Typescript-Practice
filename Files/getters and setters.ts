// # Getters and Setters

// class User {
//   private _courseCount = 1;
//   constructor(public email: string, public name: string, public city: string) {}

//   private deleteToken() {
//     console.log("Token deleted");
//   }
//   get getAppleEmail(): string {
//     return `apple ${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than 1");
//     }

//     this._courseCount = courseNum;
//   }
// }

// let Cuser = new User("wick@gmail.com", "wick", "New York");

// # protected

// class User {
// if you use private the class that inherited the parent class wont be able to access the assigned value from the parent class and for this case you can use "protected" keyword
// Using protected means it is accessible in the parent class where it is declared as well as the class that inherits it and it will still not be available outside following the functionality of private
//   protected _courseCount = 1;
//   constructor(public email: string, public name: string, public city: string) {}

//   private deleteToken() {
//     console.log("Token deleted");
//   }
//   get getAppleEmail(): string {
//     return `apple ${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }

//   set courseCount(courseNum) {
//     if (courseNum <= 1) {
//       throw new Error("Course count should be more than 1");
//     }

//     this._courseCount = courseNum;
//   }
// }

// class subUser extends User {
//   isFamily: boolean = true;
//   changeCourseCount() {
//     this._courseCount = 4;
//   }
// }
// let Cuser = new User("wick@gmail.com", "wick", "New York");
