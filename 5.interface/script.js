// ********************************************************
// Interface
// ********************************************************
// function greet(person: any){
//     console.log(`Hello ${person.name}`);
// }
var person = {
    name: "Jasen",
    age: 29,
    hobby: ["reading", "coding"],
    sayThings: function (thing) {
        console.log(thing);
    },
    coding: function (language) {
        console.log("coding with " + language + "...");
    },
};
// Interface does not compiled into js, it only works during the compile phase, you can't see them in the js files 
