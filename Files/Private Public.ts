// # Private and Public keyword
// # Private - if you dont want it to be accessible to anyone then use private keyword
// # Public - it is accessible to anyone and by default the things we declared inside the class User is set to public

// class User {
//   email: string;
//   name: string;
//   private city: string;
//   weapon: string = "";

//   constructor(email: string, name: string, city: string) {
//     this.email = email;
//     this.name = name;
//     this.city = city;
//   }
// }

// let Cuser = new User("wick@gmail.com", "wick", "New York");
// Cuser.weapon;

// A shortcut way to make class
// This is a lot less syntax and produces the same thing

// class User {
//   constructor(public email: string, public name: string, public city: string) {}
// }

// let Cuser = new User("wick@gmail.com", "wick", "New York");
