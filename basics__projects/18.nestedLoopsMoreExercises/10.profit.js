function challengeTheWedding(input) {
    let coinsTOneLv = Number(input.shift());
    let coinsTwoLv = Number(input.shift());
    let coinsFiveLv = Number(input.shift());
    let number = Number(input.shift());


    for (let i = 0; i <= coinsTOneLv; i++) {
        for (let j = 0; j <= coinsTwoLv; j++) {
            for (let k = 0; k <= coinsFiveLv; k++) {

                if (i + (j * 2) + (k * 5) === number) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${number} lv.`);

                }


            }

        }
    }

}

challengeTheWedding(['3', '2', '3', '10'])