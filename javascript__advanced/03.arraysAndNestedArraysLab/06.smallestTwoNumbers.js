function smallestTwoNumbers(input) {

    let minNum = input.sort((a, b) => a - b).slice(0, 2);
    return minNum.join(' ');
    // 5 15
    // 0 3
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));