function safari(a, b, c) {
    let budget = Number(a);
    let litersNeedFuel = Number(b);
    let dayTheWeek = String(c);

    let priceFuel = litersNeedFuel * 2.10;
    let totalWithExcursion = priceFuel + 100;

    if (dayTheWeek === "Sunday") {
        totalWithExcursion -= totalWithExcursion * 0.20;
    } else if (dayTheWeek === "Saturday") {
        totalWithExcursion -= totalWithExcursion * 0.10;
    }

    if (totalWithExcursion <= budget) {
        console.log(`Safari time! Money left: ${(budget - totalWithExcursion).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(totalWithExcursion - budget).toFixed(2)} lv.`);
    }


}

safari(120,
    30,
    "Saturday"
)
