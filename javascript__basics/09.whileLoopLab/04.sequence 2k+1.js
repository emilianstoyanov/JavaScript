function sequenceTwoKOne(n) {
    let num = Number(n);
    let step = 1;


    while (step <= num) {
        console.log(step);

        step = step * 2 + 1;

    }

}

sequenceTwoKOne("31")

// 1
// (1 * 2) + 1 = 3
// (3 * 2) + 1 = 7
// (7 * 2) + 1 = 15
// (15 * 2) + 1 = 31
