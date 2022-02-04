// Write foo, bar, foobar if divisible by 3 or 5 or both

function foobar(number) {
    for (let i = 1; i <= number; i++) {
        let element = i;

        if (element % 3 == 0 && element % 5 == 0) {
            console.log("foobar");
        } else if (element % 3 == 0) {
            console.log("foo");
        } else if (element % 5 == 0) {
            console.log("bar");
        } else {
            console.log(i);
        }

    }
}

foobar(15);