function aggregateElements(allNum) {

    let sumAi = 0;
    let sum1aI = 0;
    let concat = '';

    for (let i = 0; i <= allNum.length - 1; i++) {
        sum1aI += 1 / allNum[i];

        let t = allNum[i];
        sumAi += Number(t);
        concat += t;


    }

    return `${sumAi}\n${sum1aI}\n${concat}`;

}


console.log(aggregateElements([1, 2, 3]));
console.log(aggregateElements([2, 4, 8, 16]));

