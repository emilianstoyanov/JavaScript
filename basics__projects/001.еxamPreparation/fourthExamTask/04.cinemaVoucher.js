function cinemaVoucher(...input) {
    let voucherValue = Number(input.shift());


    let countTickets = 0;
    let countOthers = 0;

    let total = 0;
    while (true) {
        let inp = input.shift();
        if (inp === "End") {
            break;
        }

        let length = inp.length;
        if (length <= 8) {
            total += inp.charCodeAt(0);
        } else if (length > 8) {
            total += inp.charCodeAt(0);
            total += inp.charCodeAt(1);
        }

        if (total <= voucherValue) {
            if (length <= 8) {
                countOthers++;
                voucherValue -= total;
                total = 0;
            } else if (length > 8) {
                countTickets++;
                voucherValue -= total;
                total = 0;
            }

        } else {
            break;
        }


    }

    console.log(countTickets);
    console.log(countOthers);
}

cinemaVoucher("1500",
    " Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"
)