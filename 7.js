// factorial using while loop
let fact = 1;

function factorial(number) {
    let i = number
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}
let x1 = factorial(3);
console.log(x1);