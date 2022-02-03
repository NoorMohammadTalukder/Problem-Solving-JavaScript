// factorial of number

let fact = 1;

function factorial(number) {

    for (let i = 1; i <= number; i++) {
        fact = fact * i;

    }
    return fact;
}
let x1 = factorial(3);
console.log(x1);