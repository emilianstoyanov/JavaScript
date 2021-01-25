function mobileOperator(a, b, c, d) {
    let termTheContract = String(a);
    let typeOfContract = String(b);
    let addedInternet = String(c);
    let numberOfMonths = Number(d);


    let total = 0;
    if (termTheContract === "one") {
        if (typeOfContract === "Small") {
            total = 9.98;
        } else if (typeOfContract === "Middle") {
            total = 18.99;
        } else if (typeOfContract === "Large") {
            total = 25.98;
        } else if (typeOfContract === "ExtraLarge") {
            total = 35.99;
        }

    } else if (termTheContract === "two") {
        if (typeOfContract === "Small") {
            total = 8.58;
        } else if (typeOfContract === "Middle") {
            total = 17.09;
        } else if (typeOfContract === "Large") {
            total = 23.59;
        } else if (typeOfContract === "ExtraLarge") {
            total = 31.79;
        }

    }
    if (addedInternet === "yes") {
        if (total <= 10.00) {
            total += 5.50;
        } else if (total <= 30.00) {
            total += 4.35;
        } else if (total > 30.00) {
            total += 3.85;
        }

    }

    total = total * numberOfMonths;

    if (termTheContract === "two") {
        total -= total * 0.0375;
    }


    console.log(`${total.toFixed(2)} lv.`);
}

mobileOperator("one",
    "Small",
    "yes",
    10
)
