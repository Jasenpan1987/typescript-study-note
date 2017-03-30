// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
// class Car {
//     acceleration: number = 0;
//     constructor(public name: string){}
//     honk(): void{
//         console.log("Toooooooooot")
//     }
//     accelerate(speed: number): void{
//         this.acceleration += speed;
//     }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
// class baseObject {
//     private _width: number = 0;
//     private _length: number = 0;
//     set width(newWid: number){
//         this._width = newWid;
//     }
//     set length(newLen: number){
//         this._length = newLen;
//     }
//     calcSize():number{
//         return this._width * this._length;
//     }
// }
// const rectangle = new baseObject();
// rectangle.width = 5;
// rectangle.length = 2;
// console.log(rectangle.calcSize())
// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     private _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
var Person = (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (str) {
            if (str.length > 3)
                this._firstName = str;
            else
                this._firstName = "";
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
