// ********************************************************
// Decorator
// decorator is a ts functionality, and it is just a function
// that will getting called with the constructor function
// of the class as its only parameter
// ********************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function printInfoFactory(bool) {
    return function (target, methodName, paramIdx) {
        console.log("Target: ", target); // the prototype: {constructor, speak}
        console.log("Method name : " + methodName); // name of the method: speak
        console.log("Parameter index: " + paramIdx); // index of the parameter (0 based): 1
    };
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.speak = function (word1, word2) {
        console.log(word1 + " " + word2);
    };
    return Person;
}());
__decorate([
    __param(1, printInfoFactory(true))
], Person.prototype, "speak", null);
var p1 = new Person("Jasen");
p1.speak("Hello", "World"); // hello world
