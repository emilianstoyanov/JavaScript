function weatherForecastPartTwo(input) {
    let num = Number(input);

    if (num >= 26 && num <= 35) {
        console.log(`Hot`);

    } else if (num >= 20.1 && num <= 25.9) {
        console.log(`Warm`);

    } else if (num >= 15 && num <= 20) {
        console.log(`Mild`);
    } else if (num >= 12 && num <= 14.9) {
        console.log(`Cool`);
    } else if (num >= 5 && num <= 11.9) {
        console.log(`Cold`);
    } else {
        console.log(`unknown`);
    }

}

weatherForecastPartTwo(5)