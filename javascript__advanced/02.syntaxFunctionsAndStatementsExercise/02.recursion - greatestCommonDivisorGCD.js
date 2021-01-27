function greatestCommonDivisor(firstNum, secondNum) {


    while (secondNum !== 0) {

        let t = secondNum;
        secondNum = firstNum % secondNum;
        firstNum = t;

    }
    return firstNum;

}

console.log(greatestCommonDivisor(15, 5));
console.log(greatestCommonDivisor(2154, 458));

