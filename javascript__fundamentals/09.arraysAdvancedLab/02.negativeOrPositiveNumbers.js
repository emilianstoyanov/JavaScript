function negativeOrPositiveNumbers(input) {

    let newArray = [];

    for (let i = 0; i < input.length; i++) {
        let num = input[i];

        if (num >= 0) {
            newArray.push(num);
        } else {
            newArray.unshift(num);
        }

    }

    for (let t of newArray) {
        console.log(t);

    }

}


negativeOrPositiveNumbers([3, -2, 0, -1])