function graduation(a) {
    let name = String(a[0]);
    let stopCount = 0;
    let flag = false;
    let total = 0;
    let start = 1;
    let stop = 12;
    while (start <= stop) {
        let evaluation = Number(a[start])
        if (evaluation >= 4.00) {
            start += 1;
            total += evaluation;

        } else {
            stopCount += 1
            start += 1
            if (stopCount === 2) {
                console.log(`${name} has been excluded at ${start - 2} grade`);
                flag = true;
                break;
            }

        }

    }
    if (flag === false) {
        console.log(`${name} graduated. Average grade: ${(total / 12).toFixed(2)}`);
    }


}


graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])

