function fish(a, b, c, d, e) {
    let priceOfMackerel = Number(a);
    let pricePerSprat = Number(b);
    let bonitoKg = Number(c);
    let horseMackerelKg = Number(d);
    let musselsKg = Number(e);

    let priceBonito = priceOfMackerel + priceOfMackerel * 0.60;
    let amountBonito = bonitoKg * priceBonito;

    let priceMackerel = pricePerSprat + pricePerSprat * 0.80;
    let amountMackerel = horseMackerelKg * priceMackerel;

    let priceMussels = musselsKg * 7.50;

    let total = amountBonito + amountMackerel + priceMussels;
    console.log(total.toFixed(2));

}

fish(5.55,
3.57,
4.3,
3.6,
7

)
