var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(length, height) {
        return length * height;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
// need to bundle the file by using the command tsc --outFile 2.bundle.js 2.circleMath.ts 2.rectangleMath.ts 2.app.ts
// the sequence matters!!!
console.log(MyMath.calculateCircumference(4));
console.log(MyMath.calculateRectangle(18, 10));
