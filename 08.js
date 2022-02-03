// finding smallest element of an array
function findSmallest(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

let num = [100, 2000, 33];
// console.log(numbers.length)
let x1 = findSmallest(num);
console.log(x1);