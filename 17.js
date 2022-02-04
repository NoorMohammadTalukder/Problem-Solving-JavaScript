// write a function to reverse a string

let str = "Noor Mohammad Talukder";

function reverseString(name) {
    let reverse = " "
    for (let element of name) {
        // console.log(element);
        reverse = element + reverse;

    }
    console.log(reverse)
}

reverseString(str);