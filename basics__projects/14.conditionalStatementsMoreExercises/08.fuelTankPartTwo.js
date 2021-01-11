function fuelTankPartTwo(a, b, c) {
    let fuelType = String(a);
    let amountFuel = Number(b);
    let clubCard = String(c);

    let priceGasoline = 2.22;
    let priceDiesel = 2.33;
    let priceGas = 0.93;

    let total = 0

    if (fuelType === "Gas") {
        if (clubCard === "Yes") {
            priceGas -= 0.08;
            total = priceGas * amountFuel;
        } else {
            total = priceGas * amountFuel;
        }

    } else if (fuelType === "Gasoline") {
        if (clubCard === "Yes") {
            priceGasoline -= 0.18;
            total = priceGasoline * amountFuel;
        } else {
            total = priceGasoline * amountFuel;
        }
    } else if (fuelType === "Diesel") {
        if (clubCard === "Yes") {
            priceDiesel -= 0.12;
            total = priceDiesel * amountFuel;
        } else {
            total = priceDiesel * amountFuel;

        }
    }

    if (amountFuel > 20 && amountFuel <= 25) {
        total -= total * 0.08;
    } else if (amountFuel > 25) {
        total -= total * 0.10;
    }


    console.log(`${total.toFixed(2)} lv.`);
}


fuelTankPartTwo("Diesel",
    19,
    "No"
)

// Ако водача има карта за отстъпки,  той се възползва от следните намаления
// за литър гориво: 18 ст. за литър бензин, 12 ст. за литър дизел и 8 ст. за литър газ.

// Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка
// от крайната цена, при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.