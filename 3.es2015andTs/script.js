// ****************************************************
// 1. let and const
// ****************************************************
// let a = "test"; // block scoped
// console.log(a);
// a = "something else";
// console.log(a);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// const MAX_LEVEL = 100;
// MAX_LEVEL = 101; // can not re-assign a const
// block scope
// let fromLet = "fromLet";
// var fromVar = "fromVar";
// function innerScope(){
//     // console.log(fromLet) // error, use before create
//     console.log(fromVar); // undefined
//     let fromLet = "fromLetAgain";
//     var fromVar = "fromVarAgain";
//     console.log(fromLet, fromVar); // fromLetAgain, fromVarAgain
// }
// innerScope();
// console.log(fromLet, fromVar) // fromLet, fromVar
// ****************************************************
// 2. arrow function
// ****************************************************
// const addNumber = function(a: number, b: number): number { // traditional function
//     return a + b;
// }
// const multiplyNumber = (a: number, b: number): number => a * b;
// const sqrNumber = (a: number): number => a * a;
// const sayHello = (): string => "hello world";
// ****************************************************
// 3. default parameters
// ****************************************************
// const addNonZeros = (a: number = 1, b: number = 1): number => a + b;
// console.log(addNonZeros(undefined, 2));
// ****************************************************
// 4. rest parameters and spread operator
// ****************************************************
// // spread operator
// const numbers = [3, 9, -18, 99];
// console.log(Math.max(...numbers)); // Math.max only takes a list of numbers
// // rest arguments
// function makeArrayExceptTheFirst(first: number, ...rest: number[]){
//     return [...rest];
// }
// ****************************************************
// 5. destructuring array and object
// ****************************************************
// // arrays
// const skills = ["React", "Node", "Mongo", "Webpack"];
// const [frontEnd, backEnd, ,tool] = skills;
// console.log(frontEnd, backEnd, tool);
// // object
// const user = { username: "Jasen", age: 29 };
// let { username: myName, age: myAge } = user;
// console.log(myName, myAge); 
// ****************************************************
// 6. template literals
// ****************************************************
// const userName = "Jasen";
// const greeting = `Hello, ${userName}. 
// It's a very nice day...`; // 1) insert vars 2) multi lines
// console.log(greeting)
// console.log("%c看你妹看!", "font: 2.5em Arial; color: red;"); // X D
// ****************************************************
// 7. ts class (more function than es6)
// ****************************************************
// class Human {
//     // 1. new properties in ts
//     name: string; // equals to in constructor say this.name, and the default is public;
//     private salary: number = 100000; // private only accessable inside this class
//     protected age: number = 30; // protected properties are accessable inside this class and its child classes
//     constructor(name: string, public username: string){ // here it means create a public username property, and assign it to the username parameter
//         this.name = name;
//         this.username = username;
//     }
//     setName(name: string){
//         this.name = name;
//         this.setAge(400000);
//     }
//     protected setAge(age: number){
//         this.age = age;
//     }
// }
// const jasen = new Human("Jasen", "Jasenpan1987");
// // console.log(jasen.age = 10000);
// // console.log(jasen)
// // console.log(jasen.setName("foo bar"))
// // console.log(jasen)
// // jasen.setAge(1);
// // console.log(jasen)
// class Coder extends Human {
//     // new properties will be append to the parent
//     // old properties will overwite the parent
//     // level: number;
//     // if child has no constructor, the instance will automatically call the parent's constructor
//     constructor(name: string, public username: string, public level: number){
//         super(name, username);
//         this.level = level;
//     }
//     skills: string[] = ["Html", "Css", "Js"];
//     learnNewSkill(skill: string): void {
//         this.skills.push(skill);
//     }
// }
// let jasenpan = new Coder("Jasen", "Jp1987", 10);
// console.log(jasenpan);
// 2. getters and setters
// class Plant {
//     private species: string = "plant";
//     set _species(str: string){ // setter
//         if(str.length > 3) this.species = str;
//         else this.species = "default";
//     }
//     get _species(){ // getter
//         return this.species
//     }
// }
// const flower = new Plant();
// console.log(flower._species); // don't have to call like a function
// flower._species = "Tree"; // call setter just like assign some value to the property
// console.log(flower._species); 
// 3. static properties and methods
var Helper = (function () {
    function Helper() {
    }
    Helper.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    return Helper;
}());
// static properties or methods only can be accessed by the class itself
Helper.PI = 3.14;
// let helper = new Helper();
// console.log(helper.PI, helper.calcCircumference(3)) // error
// console.log(Helper.PI, Helper.calcCircumference(4)); // working
// 4. abstract class
var Project = (function () {
    function Project() {
        // this class can't be instanciated, only can be extended
        this.name = "default";
        this.budget = 10000;
    }
    Project.prototype.getBudget = function () {
        return this.budget;
    };
    return Project;
}());
var WebProject = (function (_super) {
    __extends(WebProject, _super);
    function WebProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebProject.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return WebProject;
}(Project));
// var p = new Project(); // error
// const facebook = new WebProject();
// console.log(facebook);
// facebook.changeName("Face Book");
// console.log(facebook.getBudget(), facebook);
// 5. private constructors
var Singleton = (function () {
    function Singleton(name) {
        this.name = name;
    }
    ;
    Singleton.prototype.changeName = function (newName) {
        this.name = newName;
    };
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton("The Only Instance");
        }
        return Singleton.instance;
    };
    return Singleton;
}());
// const mySig = new Singleton("hello"); // error, because you can't access the constructor from outside
var mySig1 = Singleton.getInstance();
var mySig2 = Singleton.getInstance();
console.log(mySig1, mySig2);
mySig1.changeName("hello world");
console.log(mySig1, mySig2); // hello world, hello world
