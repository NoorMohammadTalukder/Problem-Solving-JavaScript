// Traveling in a Jungle and counting wild animals
// first 10 km density of animal=10
// next 10 km density of animal=50
// greater than 20 km density of animal=100

function countAnimal(kilometers) {
    const densityFirst = 10;
    const densitySecond = 50;
    const densityThird = 100;
    let totalAnimal = 0;
    if (kilometers <= 10) {
        totalAnimal = kilometers * densityFirst;

    } else if (kilometers <= 20) {
        let firstHalf = 10 * densityFirst;
        let secondHalf = (kilometers - 10) * densitySecond;
        totalAnimal = firstHalf + secondHalf;

    } else {
        let firstHalf = 10 * densityFirst;
        let secondHalf = 10 * densitySecond;
        let thirdHalf = (kilometers - 20) * densityThird
        totalAnimal = firstHalf + secondHalf + thirdHalf;
    }
    return totalAnimal;
}

x1 = countAnimal(23);
console.log(x1);