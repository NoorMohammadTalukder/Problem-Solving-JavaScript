// finding biggest among three numbers
function findBiggest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
let x1 = findBiggest(200, 100, 50);
console.log(x1);