function vegetableMarket(a, b, c, d) {
    let priceKgVegetable = Number(a);
    let priceKgFruit = Number(b);
    let totalKgVegetables = Number(c);
    let totalKgFruit = Number(d);

    let total = (priceKgVegetable * totalKgVegetables) + (priceKgFruit * totalKgFruit);
    console.log((total / 1.94).toFixed(2));

}

vegetableMarket(0.194,
    19.4,
    10,
    10
)