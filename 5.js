// write a function to check leap year
function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

let x1 = leapYear(2000);
console.log(x1)