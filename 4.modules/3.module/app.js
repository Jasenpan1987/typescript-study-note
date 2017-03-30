"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _3_circle_1 = require("./math/3.circle");
var _3_rectangle_1 = require("./math/3.rectangle"); // in ts, the default file extension is .ts
// typescript does not support es6 module by default so does the browser,
// so we need to get support from systemjs
// check the index.html for the setups
console.log(_3_circle_1.Pi);
console.log(_3_circle_1.calculateCircumference(4));
console.log(_3_rectangle_1.calculateRectangle(4, 20));
