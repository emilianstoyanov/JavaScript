function uniquePinCodes(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());
    let thirdNum = Number(input.shift());


    let flag = false;
    for (let i = 1; i <= firstNum; i++) {
        for (let j = 1; j <= secondNum; j++) {
            for (let k = 1; k <= thirdNum; k++) {
                if (i % 2 === 0 && k % 2 === 0) {
                    flag = false;

                    if (j >= 2 && j <= 7) {

                        for (let p = 2; p < j; p++) {
                            if (j % p === 0) {
                                flag = true;
                                break;
                            }
                        }

                        if (!flag) {
                            console.log(`${i} ${j} ${k}`);
                        }


                    }

                }


            }

        }

    }


}

uniquePinCodes(['3', '5', '5'])