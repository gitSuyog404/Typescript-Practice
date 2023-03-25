// # Tuples
// It is just a specialized array given to us by TypeScript with some restrictions on to it.
// The order of the array matters in tuples
// The length of an array is defined as well.
// In this array i can assign "TS" and after that 1 without a specific order there is no restrictions to follow or a specific order in which the values must be assigned but in some cases like using API the value and data must be precise and in order in those case this wont work
// const user: (string | number)[] = ["TS", 1];
// To fix it we can convert it to tuple
// Example:
// let tUser: [string, number, boolean];
// tUser = ["Wayne", 1, true];
// let rgb: [number, number, number];
// rgb = [255, 255, 255];
// type User = [number, string];
// let user: User = [1, "BRUCE WAYNE"];
// Some problems of tuples are:
// 1. You can ovveride the values and the order
// export {};
