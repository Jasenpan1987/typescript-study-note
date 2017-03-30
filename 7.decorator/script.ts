// ********************************************************
// Decorator
// decorator is a ts functionality, and it is just a function
// that will getting called with the constructor function
// of the class as its only parameter
// ********************************************************

// // 0. config
// in tsconfig.json, do this first
// { "compilerOptions": { ... "experimentalDecorators": true }}

// // 1. simple decorator
// function logged(constructorFn: Function){ // the only parameter it taks is the constructorFn
//     console.log(constructorFn);
// }

// @logged // this will enable the decorator on the class Person
// class Person {}


// // 2. factories
// // it is simply a function that create the decorator function
// function loggedFactory(bool: boolean){
//     return bool ? (constructorFn: Function) => { // this is the actual decorator function which print out the constructor
//         console.log(constructorFn)
//     } : null
// }

// @loggedFactory(true)
// class Foo{} // will output

// @loggedFactory(false)
// class Bar{} // will not output


// // 3. enhance the base class
// function printable(conFn: Function){
//     conFn.prototype.print = function(){
//         console.log(`name: ${this.name}, age: ${this.age}`);
//     }
// }

// @printable
// class Person{
//     name;
//     age;
//     constructor(name, age){
//         this.name = name; // have to got them in the constructor function
//         this.age = age;
//     }
//     // will automatically receives a print method when create a new Person
// }

// const p1 = new Person("Jasen", 29);
// (<any>p1).print(); // need to cast, its a little bug


// // 3. multiple decorators
// function foo(conFn: Function){
//     console.log("Foo");
// }

// function bar(conFn: Function){
//     console.log("Bar");
// }

// @foo
// @bar
// class Something{}

// let something = new Something(); // print both Foo and Bar


// // 4. method decorator
// class Person {
//     name: string;
//     constructor(name){
//         this.name = name;
//     }
    
//     getName(){
//         console.log("my name is " + this.name);
//     }
// }

// const p1 = new Person("Jasen");
// p1.getName(); // Jasen

// p1.getName = () => {
//     console.log("I've been changed...");
// }
// p1.getName(); // I've been changed...

// // now we can make the getName property unchangable

// function editable(bool: boolean){
//     return function(target: any, propName: string, descriptor: PropertyDescriptor){
//         descriptor.writable = bool;
//     }
// }

// class Person {
//     name: string;
//     constructor(name){
//         this.name = name;
//     }
    
//     @editable(false)
//     getName(){
//         console.log("my name is " + this.name);
//     }
// }

// const p1 = new Person("Jasen");
// p1.getName(); // Jasen

// p1.getName = () => { // will not throw error, but will not have any effect
//     console.log("I've been changed...");
// }
// p1.getName(); // Jasen


// // 5. property decorator
// we can't use the property decorator to modify a property's descriptor just like what we did for the method decorator, and here is the reason why

// function overWrite(bool: boolean){
//     return function(target: any, propName: string): any{ // we can't get the PropertyDescriptor from here
//         // but we can assign the PropertyDescriptor from the return value
//         const descriptor: PropertyDescriptor = {
//             writable: bool
//         }
//         return descriptor; // this can work, but there is an issue
//     }
// } 

// class Person {
//     @overWrite(false)
//     name: string;

//     constructor(name: string){
//         this.name = name;
//     }
// }

// const p1 = new Person("Jasen");
// console.log(p1) // this will return {}
// // this is because the PropertyDescriptor will prevent overWrite even if it is the first one in the constructor


// // 6. parameter decorator
function printInfoFactory(bool: boolean){
    return function(target: any, methodName: string, paramIdx: number){
        console.log("Target: ", target); // the prototype: {constructor, speak}
        console.log("Method name : " + methodName); // name of the method: speak
        console.log("Parameter index: " + paramIdx); // index of the parameter (0 based): 1
    }
}
class Person {
    name: string;
    constructor(name: string){
        this.name = name;
    }

    speak(word1, @printInfoFactory(true) word2){
        console.log(word1 + " " + word2);
    }
}

const p1 = new Person("Jasen");
p1.speak("Hello", "World"); // hello world