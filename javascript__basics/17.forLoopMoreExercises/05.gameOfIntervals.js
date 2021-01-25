function gameOfIntervals(input) {
    let count = Number(input.shift());
    let length = input.length;

    let countFrom0to9 = 0;
    let countFrom10to19 = 0;
    let countFrom20to29 = 0;
    let countFrom30to39 = 0;
    let countFrom40to50 = 0;
    let countInvalidNumbers = 0;

    let total = 0;

    for (let i = 1; i <= length; i++) {
        let num = Number(input.shift());
        if (num >= 0 && num <= 50) {
            if (num >= 0 && num <= 9) {
                total += num * 0.20;
                countFrom0to9++;

            } else if (num >= 10 && num <= 19) {
                total += num * 0.30;
                countFrom10to19++;

            } else if (num >= 20 && num <= 29) {
                total += num * 0.40;
                countFrom20to29++;

            } else if (num >= 30 && num <= 39) {
                total += 50;
                countFrom30to39++;

            } else if (num >= 40 && num <= 50) {
                total += 100;
                countFrom40to50++;

            }


        } else {

            total = total / 2;
            countInvalidNumbers++;

        }


    }

    console.log(total.toFixed(2))
    console.log(`From 0 to 9: ${((countFrom0to9 / count) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((countFrom10to19 / count) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((countFrom20to29 / count) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((countFrom30to39 / count) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((countFrom40to50 / count) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((countInvalidNumbers / count) * 100).toFixed(2)}%`);

}


gameOfIntervals([
        '10', '43', '57',
        '-12', '23', '12',
        '0', '50', '40',
        '30', '20'
    ]
)