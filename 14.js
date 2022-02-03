// finding largest element of an array
function findLargest(numbers) {
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

let num = [100, 2000, 33];
// console.log(numbers.length)
let x1 = findLargest(num);
console.log(x1);