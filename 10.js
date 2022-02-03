// swamping two numbers using desturings

function swamp(num1, num2) {
    console.log("first number: ", num1, "\nsecond number:", num2);
    [num1, num2] = [num2, num1];
    console.log("After swamping \nfirst number: ", num1, "\nsecond number:", num2);

}

swamp(10, 20);