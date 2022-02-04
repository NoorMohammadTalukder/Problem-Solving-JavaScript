// fibonucci series using function
function fibonucci(firstTwoTerms, totalNumOfTerms) {
    // let fibonucciNumber = firstTwoTerms;
    for (let i = 2; i < totalNumOfTerms; i++) {
        previous1 = firstTwoTerms[i - 2];
        previous2 = firstTwoTerms[i - 1];

        firstTwoTerms = previous1 + previous2;
        console.log(firstTwoTerms);
    }
}
x1 = [0, 1];
x2 = 5;
fibonucci(x1, x2);