// Types available in Typescript
// ********************************************************************
// existing type in js
// ********************************************************************
// 1. string
let myName = "Jasen";
// myName = 123; // will give you error

// 2. number
let age = 29;
// myAge = "unknown"; // error
age = 29.5; // works, float and int are the same type in ts

// 3. boolean
let hasHobby = true;
// hasHobby = 1; // error

// * assign types
// let myAge; // here we assign myAge to type: any, no compilation check, back to the js world
// myAge = 29; // works
// myAge = "hello world"; // ALSO WORKS!!!

// let myAge: number; // assign types
// myAge = 29; // works
// myAge = "hello"; // error
// let hello: string = "hello"; //works

// 4. array
let skills = ["react", "ng", "vue"]; // in ts, it's not only an array, but also an array of strings
// skills = [100]; // will give you error

let skills2: any[] = ["css", "html", "js"]; // this tells ts compiler we want an array of anything
skills2 = [100, 200, 300]; // this will work
// skills = 100; // will give you error, cuz we look for arrays

// ********************************************************************
// new types in ts
// ********************************************************************

// 1. tuples -> an array that specifies the format
let address1 = [99, "hay street"]; // this is an array of any, just like any[]
let address2: [number, string] = [99, "hey street"]; // this is a tuple, which limits the format of the array
address2 = [101, "york street"]; // will work
// address2 = ["beep street", 456]; // will not work, since address2 is a tuple

// 2. enum -> a mapping between values and its coresponding index, it can save memories of the computer
enum Color { red, green, blue}; // define an enum
let myColor: Color = Color.green; // receives 1
let green = Color[1];
console.log(myColor, green); // 1, green

enum Color2 { 
    red = 100, 
    green, // now it became to 101
    blue // now it became to 102
}; // manually gives the index of red, the following indexes will just keep adding 1 on the index of red
let myColor2 = Color2.red; // receives 100
let myColor3 = Color2.blue; // receives 102

console.log(myColor2, myColor3); // 100 102

// 3. any -> means the variable does not have a specific type, and the type could be changed latter on
let myCar: any = "BMW";
myCar = { brand: "BMW", model: "2017" }; // this will give you no error, but be careful when using any


// ********************************************************************
// ts in functions
// ********************************************************************

// 1. restrict the return value
function getName(): string{
    // return 111; // error
    return "Jasen";
}

// 2. specify a function without return value
function sayHello(): void {
    console.log("hello");
    // return "hello"; // error
}

// 3. specify argument type
function multiply(x: number, y: number): number {
    return x * y;
}
// multiply(1, 2); // no error
// multiply(1, "2"); // error

// 4. function type -> the characteristics of a function,
// meaning the variable can only assign to this type of functions

// this specifies myFunc can only assign to a function which 
// takes 2 numbers as its params and returns a number 
var myFunc: (a: number, b: number) => number; 
myFunc = multiply; // ok
// myFunc = sayHello; // error


// ********************************************************************
// ts in Object
// ********************************************************************

// 1. object literal
var myObj = {
    name: "Jasen",
    age: 29
}; // in ts, this is not only assign myObj to an Object literal, but also restrict
   // the type of myObj: it has to be an object with only two properties,  
   // a name property which is a string as well as an age property which is a number 

// myObj = 1; errpr
// myObj = {} // error
// myObj = {
//     name: "Hello",
//     age: 100,
//     foo: "bar"
// } // error
// myObj = {foo: "hi", bar: 123}; // error
// myObj = { name: "foo", age: 12 } // ok
// myObj = { age: 10000, name: "turtle" } // ok...

// 2. object with types
var car: { brand: string, model: string, year: number } = {
    brand: "BMW",
    model: "Q",
    year: 2009
}; // ok

// 2.5 a complex example
var complex: { // defines the object type
    data: number[],
    output: (flag: boolean) => number[] // function type
};

complex = {
    data: [1, 2, 3],
    output: function(flag: boolean): number[] {
        return this.data.map(function(x){
            return x + 1;
        });
    }
} // ok

// 3. type aliases -> keep a reference of a type structure, and use it later
type Complex = { // this is not a variable assignment, it is declearing a type
    data: number[],
    output: (flag: boolean) => number[] // function type
};
// use type
var complex2: Complex = {
    data: [4, 5, 6],
    output: function(flag: boolean){
        return [1, 2, 3];
    }
}; // ok

// 4. "or" types -> for example, age, could either be a number or a string like "secret" or "1000"
var myAge: number | string;
myAge = 27; // ok
myAge = "secret"; // ok
// myAge = false; // error

// ********************************************************************
// new in v2.x
// ********************************************************************

// 1. never (function type) -> never returns and the function never finishes, 
// it is different than the void type, for instance a function always throw an error...
// function giveError(): never{
//     throw new Error("foo");
// }

// 2. nullable type
var canBeNull = 12;
canBeNull = null; // ok
var canAlsoBeNull;
canAlsoBeNull = null; // ok
// if we add "strictNullChecks": true to the tsconfig.json, 
// the above code will not break on the "canBeNull" part, 
// because it was assigned to a number type, but you can still
// assign canAlsoBeNull to null, because the value of it was undefined
// which is a special case for null check

var canBeNullAgain: number | null = 12; // canBeNullAgain can be assigned to null even we turn on the flag

var canThisBeAny = null; // since null has become to a type, this line means the type of canThisBeAny is null
canThisBeAny = 12; // will error if we turn on the strictNullChecks flag, but works fine without the flag

var aNumber = 12;
aNumber = null; // ok without the strictNullChecks flag, error otherwise

var aNumber2: number = 1;
aNumber2 = null; // ok without the strictNullChecks flag, error otherwise

