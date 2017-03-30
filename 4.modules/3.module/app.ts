import { calculateCircumference, Pi } from "./math/3.circle";
import { calculateRectangle } from "./math/3.rectangle"; // in ts, the default file extension is .ts

// typescript does not support es6 module by default so does the browser,
// so we need to get support from systemjs
// check the index.html for the setups

console.log(Pi);
console.log(calculateCircumference(4));
console.log(calculateRectangle(4, 20));