function division(input) {
    let num = Number(input);

    let total = 0;
    if (num % 10 === 0) {
        total += 10;
    } else if (num % 7 === 0) {
        total += 7;
    } else if (num % 6 === 0) {
        total += 6;
    } else if (num % 3 === 0) {
        total += 3;
    } else if (num % 2 === 0) {
        total += 2;
    }


    if (total !== 0) {
        console.log(`The number is divisible by ${total}`);
    } else {
        console.log(`Not divisible`);
    }
}

division("12")