function lastNumbersSequence(n, k) {


    let saveNum = [1, 1, 2];

    let total = 0;


    while (saveNum.length < n) {

        let cut = saveNum.slice(-k);
        for (let j = 0; j < k; j++) {

            total += cut[j];


        }
        saveNum.push(total);
        total = 0;


    }

    console.log(saveNum.join(" "))

}

lastNumbersSequence(6, 3)