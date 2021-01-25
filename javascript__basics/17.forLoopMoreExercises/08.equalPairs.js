function equalPairs(input) {
    let count = Number(input.shift());


    let flag = false;
    let minNum = 0;
    let maxNum = 0;

    for (let i = 0; i < count; i++) {
        let firstNum = Number(input.shift());
        let secondNum = Number(input.shift());

        let sum = firstNum + secondNum;

        if (i === 0) {
            minNum = sum;
            maxNum = sum;
        } else {
            if (sum < minNum) {
                flag = true;
                minNum = sum;
            } else if (sum > maxNum) {
                flag = true;
                maxNum = sum;
            }
        }


    }

    if (!flag) {
        console.log(`Yes, value=${minNum}`);
    } else {
        console.log(`No, maxdiff=${maxNum - minNum}`);
    }


}

equalPairs([ "7",
    "34",
    "-33",
    "52",
    "12",
    "-32",
    "32",
    "23",
    "41",
    "7",
    "25",
    "34",
    "23",
    "124",
    "21"])