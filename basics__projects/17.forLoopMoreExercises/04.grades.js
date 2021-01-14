function grades(input) {
    let count = Number(input.shift());

    let one = 0;
    let two = 0;
    let three = 0;
    let four = 0;

    let countOne = 0;
    let countTwo = 0;
    let countThree = 0;
    let countFour = 0;

    for (let i = 1; i <= count; i++) {
        let num = Number(input.shift());

        if (num >= 2.00 && num <= 2.99) {
            one += num;
            countOne++;
        } else if (num >= 3.00 && num <= 3.99) {
            two += num;
            countTwo++;
        } else if (num >= 4.00 && num <= 4.99) {
            three += num;
            countThree++;
        } else if (num >= 5.00) {
            four += num;
            countFour++;
        }

    }
    let totalCount = countOne + countTwo + countThree + countFour;
    let totalEstimates = one + two + three + four;


    console.log(`Top students: ${((countFour / count) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((countThree / count) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((countTwo / count) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((countOne / count) * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalEstimates / totalCount).toFixed(2)}`);


}

grades([
        '6', '2', '3',
        '4', '5', '6',
        '2.2', ''
    ]
)