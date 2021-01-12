function matchTickets(a, b, c) {
    let budget = Number(a);
    let category = String(b);
    let numberPeople = Number(c);

    let vipTicketPrice = 499.99;
    let normalTicketPrice = 249.99;
    let totalPriceGroup = 0

    if (numberPeople >= 1 && numberPeople <= 4) {
        budget -= budget * 0.75;

    } else if (numberPeople >= 5 && numberPeople <= 9) {
        budget -= budget * 0.60;

    } else if (numberPeople >= 10 && numberPeople <= 24) {
        budget -= budget * 0.50;

    } else if (numberPeople >= 25 && numberPeople <= 49) {
        budget -= budget * 0.40;

    } else if (numberPeople >= 50) {
        budget -= budget * 0.25;

    }
    if (category === "Normal") {
        totalPriceGroup = numberPeople * normalTicketPrice;
    } else {
        totalPriceGroup = numberPeople * vipTicketPrice;
    }


    if (budget >= totalPriceGroup) {
        console.log(`Yes! You have ${(budget - totalPriceGroup).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPriceGroup - budget).toFixed(2)} leva.`);
    }

}


matchTickets(30000,
    "VIP",
    49
)