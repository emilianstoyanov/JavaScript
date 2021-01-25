function mathOperations(firstNum, secondNum, operator) {

    let result;
    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break
        case '-':
            result = firstNum - secondNum;
            break
        case '/':
            result = firstNum / secondNum;
            break
        case '*':
            result = firstNum * secondNum;
            break
        case '%':
            result = firstNum % secondNum;
            break
        case '**':
            result = firstNum ** secondNum;
            break


    }
    return result;
}

console.log(mathOperations(5, 6, '+'));
console.log(mathOperations(3, 5.5, '*'));
