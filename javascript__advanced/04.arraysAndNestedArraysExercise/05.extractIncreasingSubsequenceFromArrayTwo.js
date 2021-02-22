function extractIncreasingSubsequenceFromArray(input) {
    return input.reduce((a, v) => {
        if (v >= (a[a.length - 1] || input[0])) {
            a.push(v)
        }
        return a;
    }, [])
}

console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));

console.log(extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]));

console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]));