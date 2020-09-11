function poolDay(a, b, c, d) {
    let countPeople = Number(a);
    let entranceFee = Number(b);
    let priceForOneDeckChair = Number(c);
    let priceForOneUmbrella = Number(d);

    let totalPrice = countPeople * entranceFee;
    let percentagePeople = Math.ceil(countPeople * 0.75);
    let deckChair = percentagePeople * priceForOneDeckChair;

    let umbrellas = Math.ceil(countPeople / 2);
    let priceUmbrellas = umbrellas * priceForOneUmbrella;

    let total = totalPrice + deckChair + priceUmbrellas;
    console.log(`${total.toFixed(2)} lv.`);


}

poolDay(21,
    5.50,
    4.40,
    6.20,
)