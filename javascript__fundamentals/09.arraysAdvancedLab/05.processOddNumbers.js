function processOddNumbers(input) {

    let save = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            save.push(input[i] * 2);
        }


    }

    console.log(save.reverse().join(" "));


}

processOddNumbers([3, 0, 10, 4, 7, 3])