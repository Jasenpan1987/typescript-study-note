// ********************************************************
// generics
// the generic lets the user defines the type of a function, 
// object or a class latter by follows the pattern
// ********************************************************
// // 0. problem
// function echo(data: any){
//     return data;
// }
// console.log(echo("Jasen").length); // works, string has length property
// console.log(echo([1, 2, 3, 4]).length); // works, array also has length property
// console.log(echo({ name: "jasen", age: 29 }).length); // returns undefined, object doesn't have length property
// // we want to have a way that can make the last one a compilation error, and make the compiler to aware of 
// // the object doesn't have length
// // 1. better generic way
// function betterEcho<T>(data: T){ // here is how you define a generic function, and the T is just a name
//     return data;
// }
// console.log(betterEcho("Jasen").length); // now you got the ide and compiler support, they will think this function is a string type when it execute to this line.
// console.log(betterEcho(123).length); // not working, because now the compiler found out the function is a string type, and string doesn't have length property
// console.log(betterEcho<[string]>([1, 2, 3])); // not work, you can even define the function type before passing the parameter, now the compiler thinks the function is an array of string type, but you passed an array of numbers.
// // 2. built in generic (Array)
var arr = [1, 2];
arr.push(3); // works
// arr.push("hello"); // error out
// // if we want to have a function that prints each element of an array that passed as an argument
// function printAllWrong<T>(args: T){
//     console.log(args.forEach(arg => { // not work, because the compiler doesn't know the type T has a forEach method on it
//         console.log(arg);
//     }));
// }
function printAllRight(args) {
    console.log(args.forEach(function (arg) {
        console.log(arg);
    }));
}
// printAllRight([1, 2, 3]); // works
// printAllRight<string>(["hello", "world"]);  // works
// printAllRight<number>([1, 2, "something"]); // not work, because you specifies that you will pass an array of numbers 
// // 2. generic types
var echo2 = function (data) { return data; };
// 1) echo 2 is a function that is a user defined type, 
// 2) <T>(data: T) => T  means the type is a user defined type, and its a function takes an argument of T type and returns the same type 
// 3) <T>(data: T) => data;  is an arrow function of <T> type, takes a data of T type and returns it, which follows the type defination of the echo2
// // 2. generic class
// class SimpleMath {
//     baseNumber; // public property, ts syntax
//     multiplier; // public property, ts syntax
//     cal(){
//         return this.baseNumber * this.multiplier;
//     }
// }
// const sm1 = new SimpleMath();
// sm1.baseNumber = 10;
// sm1.multiplier = 20;
// console.log(sm1.cal()); // everything works fine 
// const sm2 = new SimpleMath();
// sm2.baseNumber = "something";
// sm2.multiplier = 2;
// console.log(sm2.cal()); // will return NaN, but no error
// class SimpleMath<T> {
//     baseNumber: T;
//     multiplier: T;
//     cal():number {
//         // return this.baseNumber * this.multiplier; // error!!!
//         return +this.baseNumber * +this.multiplier; // works, but doesn't seems useful
//     }
// }
// // with constrains
// class SimpleMath<T extends number> {
//     baseNumber: T; // now T should extends a number 
//     multiplier: T; // now T should extends a number 
//     cal():number {
//         // return this.baseNumber * this.multiplier; // error!!!
//         return +this.baseNumber * +this.multiplier; // works, but doesn't seems useful
//     }
// }
// const sm3 = new SimpleMath();
// sm3.multiplier = 10; // works
// sm3.baseNumber = "something"; // error, string is not assignable to a number
// // 3. using more than 1 constrains
// 3, km -> Total of 3 km
// "3", kg -> Total of 3 kg
// class AddUnit<A extends string | number, U extends string> { // constrains
//     amount: A;
//     unit: U;
//     getOutput(): string {
//         return `Total of ${this.amount} ${this.unit}`
//     }
// }
// const au1 = new AddUnit<number, string>(); // more specific types when using, A is number, U is string
// // au1.amount = "10"; // error
// au1.amount = 10; // works
// au1.unit = "km"; // works
// console.log(au1.getOutput()); // works
// const au2 = new AddUnit<string, string>(); // A is string, U is string
// // au2.amount = 10; // error
// au2.amount = "10"; // works
// au2.unit = "ml"; // works
// console.log(au2.getOutput()); // works 
