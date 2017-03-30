/*
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": false, // if true, compiler does not gives a type of any to "let result;" by default
        "sourceMap": false, // generate sourceMap for debugging purpose
        "strictNullChecks": true, // gives null check, 
        "noUnusedParameters": true // not allows function has unused parameters
    }, 
    "exclude": [
        "node_modules"
    ]
}
*/

// 1. noImplicitAny
let myName: string = "Jasen";
let myAge: number = 123;
// myName = 30; // even though we got error, this code will still be compiled to valid js

// 2. strictNullChecks
function controlMe(isTrue: boolean): number{
    let result: number;
    if(isTrue) 
        return result;
} // this code will not be compiled if we turn on the strictNullChecks flag, because result is undefined

console.log(controlMe(true));

// 3. noUnusedParameters
function controlMe2(isTrue: boolean, bar: string): number{
    let result: number;
    if(isTrue) 
        return result;
} // will give error if noUnusedParameters is on, because the function doesn't need to use "bar"

