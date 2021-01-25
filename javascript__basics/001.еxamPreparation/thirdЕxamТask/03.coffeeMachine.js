function coffeeMachine(a, b, c) {
    let drink = String(a);
    let sugar = String(b);
    let numberOfDrinks = Number(c);


    let total = 0;
    if (drink === "Espresso") {
        if (sugar === "Without") {
            total = (numberOfDrinks * 0.90) - (numberOfDrinks * 0.90) * 0.35;
            if (numberOfDrinks >= 5) {
                total -= total * 0.25;
            }
        } else if (sugar === "Normal") {
            total = numberOfDrinks;
            if (numberOfDrinks >= 5) {
                total -= total * 0.25;
            }
        } else if (sugar === "Extra") {
            total = numberOfDrinks * 1.20;
            if (numberOfDrinks >= 5) {
                total -= total * 0.25;
            }
        }

    } else if (drink === "Cappuccino") {
        if (sugar === "Without") {
            total = numberOfDrinks - (numberOfDrinks * 0.35);
        } else if (sugar === "Normal") {
            total = numberOfDrinks * 1.20;
        } else if (sugar === "Extra") {
            total = numberOfDrinks * 1.60;
        }

    } else if (drink === "Tea") {
        if (sugar === "Without") {
            total = (numberOfDrinks * 0.50) - (numberOfDrinks * 0.50) * 0.35;
        } else if (sugar === "Normal") {
            total = numberOfDrinks * 0.60;
        } else if (sugar === "Extra") {
            total = numberOfDrinks * 0.70;
        }

    }

    if (total > 15) {
        total -= total * 0.20;
    }


    console.log(`You bought ${numberOfDrinks} cups of ${drink} for ${total.toFixed(2)} lv.`);

}


coffeeMachine("Tea",
    "Extra",
    3
)