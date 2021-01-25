function sumOfNumbersFromNtoM(firstNum, secondNum) {

    let numOne = Number(firstNum);
    let numTwo = Number(secondNum);

    let total = 0;
    for (let i = numOne; i <= numTwo; i++) {
        total += i;

    }

    return total;
}

console.log(sumOfNumbersFromNtoM('1', '5'));
console.log(sumOfNumbersFromNtoM('-8', '20'));