function negativeAndPositiveNumbers(input) {

    let save = [];
    for (let i = 0; i < input.length; i++) {

        if (input[i] < 0) {
            save.unshift(input[i]);
        } else {
            save.push(input[i]);
        }
    }
    for (let y of save) {
        console.log(y);
    }
}
negativeAndPositiveNumbers([7, -2, 8, 9]);
negativeAndPositiveNumbers([3, -2, 0, -1]);