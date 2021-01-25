function luckyNumbers(input) {
    let num = Number(input);

    let save = "";

    for (let i = 1; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            for (let j = 1; j <= 9; j++) {
                for (let o = 1; o <= 9; o++) {

                    if (i + k === j + o) {
                        if (num % (i + k) === 0) {
                            save += (`${i}${k}${j}${o}` + " ");
                        }
                    }

                }

            }

        }
    }

    console.log(save);
}

luckyNumbers(['3'])