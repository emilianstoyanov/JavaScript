function sumOfOddNumbers(input) {
    let num = Number(input);

    let loopCount = 1
    let count = 1;
    let sum = 0;
    while (loopCount <= num) {

        sum += count;
        console.log(count)


        count += 2;
        loopCount++;

    }
    console.log(`Sum: ${sum}`)


}

sumOfOddNumbers(5)