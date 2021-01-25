function flowers(a, b, c, d, e) {

    let numberChrysanthemums = Number(a);
    let numberRoses = Number(b);
    let numberTulips = Number(c);
    let season = String(d);
    let dayHoliday = String(e);

    let price = 0;

    if (season === "Spring") {
        price = numberChrysanthemums * 2.00 + numberRoses * 4.10 + numberTulips * 2.50;

        if (dayHoliday === "Y" && numberTulips > 7) {
            price += price * 0.15;
            price -= price * 0.05;

        } else if (dayHoliday === "Y" && numberTulips < 7) {
            price += price * 0.15;

        } else if (dayHoliday === "N" && numberTulips > 7) {
            price -= price * 0.05;

        }

    } else if (season === "Winter") {
        price = numberChrysanthemums * 3.75 + numberRoses * 4.50 + numberTulips * 4.15;

        if (dayHoliday === "Y" && numberRoses >= 10) {
            price += price * 0.15;
            price -= price * 0.10;

        } else if (dayHoliday === "Y" && numberRoses < 10) {
            price += price * 0.15;

        } else if (dayHoliday === "N" && numberRoses >= 10) {
            price -= price * 0.10;
        }

    } else if (season === "Autumn") {
        price = numberChrysanthemums * 3.75 + numberRoses * 4.50 + numberTulips * 4.15;

        if (dayHoliday === "Y") {
            price += price * 0.15;
        }

    } else if (season === "Summer") {
        price = numberChrysanthemums * 2.00 + numberRoses * 4.10 + numberTulips * 2.50;

        if (dayHoliday === "Y") {
            price += price * 0.15;
        }

    }

    if (numberChrysanthemums + numberTulips + numberRoses > 20) {
        price -= price * 0.20;
    }


    console.log((price + 2).toFixed(2));
}

flowers(3,
    10,
    9,
    "Winter",
    "N"
)