function sumDigits(num) {

    let total = 0;
    let numString = String(num).split("");

    for (let i = 0; i < numString.length; i++) {
        total += Number(numString[i]);

    }
    console.log(total);


}

sumDigits(543)