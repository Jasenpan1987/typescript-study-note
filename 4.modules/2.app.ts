// entry file
// 1. use tsc to do the bundle task
// need to bundle the file by using the command tsc --outFile 2.bundle.js 2.circleMath.ts 2.rectangleMath.ts 2.app.ts
// the sequence matters!!!
// console.log(MyMath.calculateCircumference(4));
// console.log(MyMath.calculateRectangle(18, 10));

// 2. use ts module to import the files we needed to this file and bundle it out
// the import syntax start with three slashes, and when we compile this file, we still need to give the file name of this file and the outFile name
/// <reference path="./2.circleMath.ts" />
/// <reference path="./2.rectangleMath.ts" />
// this file has one extra layer of namespace
/// <reference path="./2.triangleMathNested.ts" />
console.log(MyMath.calculateCircumference(4));
console.log(MyMath.calculateRectangle(18, 10));

// 3. nested namespace, we have to do like this
console.log(MyMath.TriangleMath.getArea(5, 8));
// or we can get the alias of the TriangleMath namespace
import TriangleMath = MyMath.TriangleMath; // the import here is just defining an alias, but like es6
console.log(TriangleMath.getArea(5, 10));