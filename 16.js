// remove duplicate element from an array

function removeDuplicate(x) {
    let unique = [];
    for (let element of x) {
        // console.log(element)
        if (unique.indexOf[element] == -1) {
            unique.push(element);
        }

    }
    return unique
}
let x2 = [1, 2, 3, 3, 100, 1];
let x3 = removeDuplicate(x2);
console.log(x3);