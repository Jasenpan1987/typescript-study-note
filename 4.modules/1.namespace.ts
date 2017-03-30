namespace MathHelper {
    const PI = 3.14; // cannot be accessed from outside since we didn't export it
    export function calculateCircumference(diameter: number): number{
        return diameter * PI;
    }

    export function calculateRectangle(length: number, height: number): number {
        return length * height;
    }
}

console.log(MathHelper.calculateCircumference(4));
console.log(MathHelper.calculateRectangle(5, 9));
const PI = 3.1415926; // works since the other PI is in the namespace of MathHelper