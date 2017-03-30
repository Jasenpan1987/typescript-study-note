// Exercise 1 - Maybe use an Arrow Function?
// var double = function(value) {
//     return value * 2;
// };
// console.log(double(10));
 
const double = (val: number): number => val * 2;

// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
 
// const greet = (name: string = "Max"): void => {
//     console.log(`Hello ${name}`);
// }

// Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));

// const numbers = [-3, 33, 38, 5];
// console.log(Math.min(...numbers));
 
// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
// const numbers = [-3, 33, 38, 5];
// var newArray = [55, 20];
// // Array.prototype.push.apply(newArray, numbers);
// // newArray.push(...numbers);
// const newArray2 = [...newArray, ...numbers]
// console.log(newArray2);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
let [re1, re2, re3] = testResults;

// Exercise 6 - And a well-constructed object!
var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
let { firstName, experience} = scientist;
console.log(firstName, experience);

