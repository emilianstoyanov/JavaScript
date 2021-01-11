function flowerShop(a, b, c, d, e) {
    let numberMagnolias = Number(a);
    let numberHyacinths = Number(b);
    let numberRoses = Number(c);
    let numberCacti = Number(d);
    let giftPrice = Number(e);


    let amount = (numberMagnolias * 3.25) + (numberHyacinths * 4.00) + (numberRoses * 3.50) + (numberCacti * 8.00);
    let taxesTotalAmount = amount - (amount * 0.05);

    if (taxesTotalAmount < giftPrice) {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - taxesTotalAmount)} leva.`);
    } else {
        console.log(`She is left with ${Math.floor(taxesTotalAmount - giftPrice)} leva.`);
    }


}


flowerShop(15,
    7,
    5,
    10,
    100
)

// •	Магнолии – 3.25 лева
// •	Зюмбюли – 4 лева
// •	Рози – 3.50 лева
// •	Кактуси – 8 лева
