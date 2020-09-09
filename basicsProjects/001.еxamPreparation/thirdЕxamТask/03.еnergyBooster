function energyBooster(a, b, c) {
    let fruit = String(a);
    let sizeSet = String(b);
    let numberSets = Number(c);


    let total = 0;
    if (sizeSet === "big") {
        if (fruit === "Watermelon") {
            total = (28.70 * 5) * numberSets;

        } else if (fruit === "Mango") {
            total = (19.60 * 5) * numberSets;

        } else if (fruit === "Pineapple") {
            total = (24.80 * 5) * numberSets;

        } else if (fruit === "Raspberry") {
            total = (15.20 * 5) * numberSets;

        }
    } else if (sizeSet === "small") {
        if (fruit === "Watermelon") {
            total = (56 * 2) * numberSets;

        } else if (fruit === "Mango") {
            total = (36.66 * 2) * numberSets;

        } else if (fruit === "Pineapple") {
            total = (42.10 * 2) * numberSets;

        } else if (fruit === "Raspberry") {
            total = (20 * 2) * numberSets;

        }


    }

    if (total >= 400 && total <= 1000) {
        total -= total * 0.15
        console.log(`${total.toFixed(2)} lv.`);
    } else if (total > 1000) {
        total = total / 2
        console.log(`${total.toFixed(2)} lv.`);

    } else {
        console.log(`${total.toFixed(2)} lv.`);
    }

}

energyBooster("Pineapple", "small", 1)
