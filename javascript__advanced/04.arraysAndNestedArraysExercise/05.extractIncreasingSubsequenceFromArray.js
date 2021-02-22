function extractIncreasingSubsequenceFromArray(input) {

    let result = [];
    let saveLastElement = 0;
    for (let i of input) {

        if (saveLastElement <= i) {
            result.push(i);
            saveLastElement = i;
        }
    }
    return result;


}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));

console.log(extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]
));

console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]
));