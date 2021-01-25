function challengeTheWedding(input) {
    let countMen = Number(input.shift());
    let countWoman = Number(input.shift());
    let stopCount = Number(input.shift());

    let save = "";

    let count = 0;
    for (let i = 1; i <= countMen; i++) {
        for (let j = 1; j <= countWoman; j++) {
            if (count === stopCount) {
                break;
            } else {
                count++;
                save += (`(${i} <-> ${j})` + " ");
            }


        }

    }

    console.log(save);

}

challengeTheWedding(["5", "8", "40"])
