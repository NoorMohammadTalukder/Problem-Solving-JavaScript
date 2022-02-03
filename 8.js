// finding smallest element of an array
function findingSmallest(num) {
    let smallest = num[0];
    for (let i = 0; i <= num.length; i++) {

        if (num[i] < num[0]) {
            smallest = num[i];
        }

    }
    return smallest;
}

let numbers = [5, 2, 3];
// console.log(numbers.length)
let x1 = findingSmallest(numbers);
console.log(x1);