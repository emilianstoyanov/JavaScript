function programmingBook(a, b, c, d, e) {

    let priceOnePage = Number(a);
    let priceOneCover = Number(b);
    let paperReductionPercentage = Number(c);
    let amountTheDesigner = Number(d);
    let percentageTheTotalAmount = Number(e);

    let initialAmount = (priceOnePage * 899) + (priceOneCover * 2);
    let teenReduction = initialAmount - (initialAmount * (paperReductionPercentage / 100));
    let priceDesigner = teenReduction + amountTheDesigner;

    let total = priceDesigner - (priceDesigner * (percentageTheTotalAmount / 100));

    console.log(`Avtonom should pay ${total.toFixed(2)} BGN.`);


}

programmingBook(0.01,
    1,
    10,
    20,
    20,
)


programmingBook(0.05,
    1.20,
    40,
    19.99,
    20,
)