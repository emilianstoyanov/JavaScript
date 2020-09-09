function tournamentOfChristmas(input) {
    let days = Number(input.shift());

    let money = 0;
    let totalMoney = 0;

    let countWin = 0;
    let countLose = 0;

    let totalCountWin = 0;
    let totalCountLose = 0;

    for (let i = 1; i <= days; i++) {


        while (true) {
            let finish = input.shift();
            if (finish === "Finish") {
                if (countWin > countLose) {
                    money += money * 0.10;
                    totalCountWin++;
                } else {
                    totalCountLose++;
                }
                countWin = 0;
                countLose = 0;
                totalMoney += money;
                money = 0;
                break;


            }
            let winOrLos = input.shift();
            if (winOrLos === "win") {
                money += 20;
                countWin++;
            } else {
                countLose++;
            }


        }

    }
    if (totalCountWin > totalCountLose) {
        totalMoney += totalMoney * 0.20;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }


}

tournamentOfChristmas([
        '3', 'darts',
        'lose', 'handball',
        'lose', 'judo',
        'win', 'Finish',
        'snooker', 'lose',
        'swimming', 'lose',
        'squash', 'lose',
        'table tennis', 'win',
        'Finish', 'volleyball',
        'win', 'basketball',
        'win', 'Finish'
    ]
)
