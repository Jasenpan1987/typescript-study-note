var MathHelper;
(function (MathHelper) {
    var PI = 3.14; // cannot be accessed from outside since we didn't export it
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MathHelper.calculateCircumference = calculateCircumference;
    function calculateRectangle(length, height) {
        return length * height;
    }
    MathHelper.calculateRectangle = calculateRectangle;
})(MathHelper || (MathHelper = {}));
console.log(MathHelper.calculateCircumference(4));
console.log(MathHelper.calculateRectangle(5, 9));
var PI = 3.1415926; // works since the other PI is in the namespace of MathHelper
