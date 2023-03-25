// const User = {
//   name: "Wick",
//   email: "wickemail.com",
//   isActive: true,
// };

// function createUser({ name: string, isActive: boolean }) {}
// You cannot return a function like this

// As you can see that there is no parameter in the function createUser that is for email but we are still assigning email through a variable and it is accepting it so this shows that not every weird things from javascript just disappears because you use typescript
// let newUser = { name: "Wick", isActive: true, email: "name@gmail.com" };
// createUser(newUser);

// What happens when an object returns an object
// function createCourse(): { name: string; price: number } {
//   return { name: "TypeScript", price: 500 };
// }

// Errors that comes up in TypeScript

// export {};

// # Type aliases
// "type" keyword
// It is like creating types in typescript

/*
    we write type _name = {

        _key : datatype;
        _key : datatype;
    }
*/
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// type myString = string;  this line doesn't seem practical because there is no usecase in which you would redefine a predefined datatype

// function createUser(user: User(this means that the user that is being passed is of User type))

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

// export {};
