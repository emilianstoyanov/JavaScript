function carNumber(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    let save = "";
    for (let i = firstNum; i <= secondNum; i++) {
        for (let k = firstNum; k <= secondNum; k++) {
            for (let j = firstNum; j <= secondNum; j++) {
                for (let o = firstNum; o <= secondNum; o++) {

                    if (i % 2 === 0 && o % 2 === 1 || i % 2 === 1 && o % 2 === 0) {
                        if (i > o) {
                            if ((k + j) % 2 === 0) {
                                save += (`${i}${k}${j}${o}` + " ");

                            }
                        }

                    }

                }

            }

        }
    }

    console.log(save);
}

carNumber(['3', '5'])