// write a function for multiplication table
function multiplicationTable(number) {
    console.log("Multiplication table of ", number, "is \n-----------------")
    for (var i = 1; i <= 10; i++) {
        var number2 = i * number;
        console.log(i, "  x  ", number, " = ", number2);
    }
}

multiplicationTable(2);