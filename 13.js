// total of an array
function totalArray(num) {
    let total = 0;
    for (let i = 0; i < num.length; i++) {
        let a1 = num[i];
        total = total + a1;
    }
    return total
}
x1 = [1, 2, 2, 5];
let x2 = totalArray(x1);
console.log(x2);