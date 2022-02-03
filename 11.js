// finding biggest among 2 numbers
function findBiggest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let x1 = findBiggest(20, 10);
console.log(x1);