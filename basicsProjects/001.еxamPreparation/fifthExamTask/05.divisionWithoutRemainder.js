function divisionWithoutRemainder(input) {
    let count = Number(input.shift());

    let divisionIntoTwo = 0;
    let divisionIntoThree = 0;
    let divisionIntoFour = 0;

    for (let i = 1; i <= count; i++) {
        let num = Number(input.shift());


        if (num % 2 === 0) {
            divisionIntoTwo++;
        }
        if (num % 3 === 0) {
            divisionIntoThree++;
        }
        if (num % 4 === 0) {
            divisionIntoFour++;
        }


    }
    console.log(`${((divisionIntoTwo / count) * 100).toFixed(2)}%`);
    console.log(`${((divisionIntoThree / count) * 100).toFixed(2)}%`);
    console.log(`${((divisionIntoFour / count) * 100).toFixed(2)}%`);


}

divisionWithoutRemainder([
    '10', '680', '2',
    '600', '200', '800',
    '799', '199', '46',
    '128', '65'
])