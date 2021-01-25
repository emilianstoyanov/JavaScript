function familyTrip(a, b, c, d) {
    let budget = Number(a);
    let countNight = Number(b);
    let priceForNight = Number(c);
    let percentageForAdditionalCosts = Number(d);


    if (countNight > 7) {
        priceForNight -= priceForNight * 0.05;
    }

    let totalPriceNight = countNight * priceForNight;
    let otherMoney = budget * (percentageForAdditionalCosts / 100);

    let total = totalPriceNight + otherMoney;


    if (total <= budget) {
        console.log(`Ivanovi will be left with ${(budget - total).toFixed(2)} leva after vacation.`);

    } else {
        console.log(`${(total - budget).toFixed(2)} leva needed.`);

    }
}


familyTrip(500,
    7,
    66,
    15
)