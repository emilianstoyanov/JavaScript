function largestNumer(firtNum, secondNum, thirdNum) {

    let total;
    if (firtNum > secondNum && firtNum > thirdNum) {
        total = firtNum;
    } else if (secondNum > firtNum && secondNum > thirdNum) {
        total = secondNum;
    } else {
        total = thirdNum;
    }


     return `The largest number is ${total}.`;
}

console.log(largestNumer(5, -3, 16));