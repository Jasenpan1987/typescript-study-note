var MyMath;
(function (MyMath) {
    function calculateRectangle(length, height) {
        return length * height;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
