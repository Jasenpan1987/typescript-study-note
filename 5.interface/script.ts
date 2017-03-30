// ********************************************************
// Interface
// ********************************************************
// function greet(person: any){
//     console.log(`Hello ${person.name}`);
// }

// const p1 = { name: "Jasen", id: "123" }; // has name property
// const p2 = { firstName: "Jasen", id: "456" }; // has no name property, won't work
// greet(p1); // Hello Jasen
// greet(p2); // Hello undefined

// // interface is like a contract for the property that an object should have

// // 1. solution without interface
// function greet2(person: { name: string }){ // we defines the person should have a property called name
//     console.log(`Hello ${person.name}`);
// }

// const p3 = { name: "Jasen", id: "123" }; 
// const p4 = { firstName: "Jasen", id: "456" }; 
// greet2(p3); // Hello Jasen
// // greet2(p4); // will not be able to compiled

// // drawback: if we have multiple files that uses the same parameters, we have to define it several times
// just like the following code
// function greet(person: { name: string }){ 
//     console.log(`Hello ${person.name}`);
// }

// function changeName(person: { name: string }, newName: string){
//     person.name = newName;
// }

// const p1 = { name: "foo", age: 99 };
// greet(p1); //
// changeName(p1, "bar");
// greet(p1);

// 2. with interface
// interface NamedPerson {
//     // put the requirements here
//     name: string
// }

// function greet(person: NamedPerson){ 
//     console.log(`Hello ${person.name}`);
// }

// function changeName(person: NamedPerson, newName: string){
//     person.name = newName;
// }

// const p1 = { name: "foo", age: 99 };
// greet(p1);
// changeName(p1, "bar");
// greet(p1);

// // 3. one little problem
// const p3 = { name: "foo", age: 99 }; // works
// greet(p3); // works
// // greet({ name: "foo", age: 99 }); // this will give me error, saying the age property does not exist in the NamedPerson interface

// // 4. optional properties
// interface NamedPerson {
//     name: string;
//     age?: number // means the age is optional
// }

// function greet(person: NamedPerson){ 
//     console.log(`Hello ${person.name}`);
// }

// function changeName(person: NamedPerson, newName: string){
//     person.name = newName;
// }

// const p1 = { name: "foo", age: 99 };
// const p2 = { name: "baz" }
// greet(p1);
// changeName(p1, "bar");
// greet(p1);
// greet(p2); //works
// greet({ name: "foo", age: 99 }); // also works

// 5. doesn't certain about a property
// interface Something {
//     firstName: string;
//     age?: number;
//     foo: any; // meaning there should be a foo, but we don't know its type
//     [propName: string]: any; // any number of properties that don't know the names
// }

// // 6. interface and method

// interface NamedPerson {
//     name: string;
//     age?: number;
//     [propName: string]: any;
//     sayHello(name: string): void; // this means each NamedPerson type varaiable should have sayHello
// }

// const p1: NamedPerson = {
//     name: "Jasen",
//     skills: ["html", "css", "js"],
//     sayHello(toPerson: string){
//         console.log(`Hello, ${toPerson}`);
//     }
// }

// // 7. interface and class

// interface Animal {
//     name: string;
//     weight?: number;
//     food: string;
//     eat(): void;
// };

// class Cat implements Animal {
//     name: "cat"; // must have
//     weight: 10; // could have
//     food: "random things"; // must have
//     eat(){ // must have
//         console.log(`${this.name} eats ${this.food}`);
//     }

//     die(){ // additional methods
//         console.log(`${this.name} is dead`);
//     }
// }

// // 8. interface and function types
// interface addTwoNumbersFunc {
//     (num1: number, num2: number): number; // meaning this function takes two numbers as the arguments and returns a number
// }

// let addTwoNumbers: addTwoNumbersFunc;

// addTwoNumbers = function(number1: number, number2: number){
//     return number1 + number2;
// }

// 9. interface inheritance
interface Person {
    name: string;
    age?: number;
    hobby: [string];
    sayThings(thing: string): void;
}

interface Coder extends Person {
    // automatically recieves the properties from its parent
    age: number; // change the age property from optional to required
    // hobby: string; // cannot overwrite parent's type
    coding(language: string): void;
}

const person: Coder = {
    name: "Jasen",
    age: 29,
    hobby: ["reading", "coding"],
    sayThings(thing){
        console.log(thing);
    },
    coding(language){
        console.log(`coding with ${language}...`);
    },
    // eating(food){ // object literal cannot have additional properties beyond its interface
    //     console.log("yum yum...")
    // }
}

// Interface does not compiled into js, it only works during the compile phase, you can't see them in the js files