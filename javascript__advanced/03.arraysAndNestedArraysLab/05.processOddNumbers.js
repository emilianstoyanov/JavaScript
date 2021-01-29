function processOddNumbers(input) {


    let result = input
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2);

    return result.reverse().join(' ');


    // if (i % 2 !== 0) {
    //     let oddPositionNum = input[i] * 2
    //     save.unshift(oddPositionNum);
    // }

    // console.log(result.join(' ');
}

console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
