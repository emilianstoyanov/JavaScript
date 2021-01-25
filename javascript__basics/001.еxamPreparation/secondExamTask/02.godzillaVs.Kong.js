function godzillaVsKong(a, b, c) {
    
    let filmBudget = Number(a);
    let numberOfExtras = Number(b);
    let priceClothingOneExtra = Number(c);

    let priceForDecor = filmBudget * 0.10;
    let priceForClothing = numberOfExtras * priceClothingOneExtra;

    if (numberOfExtras > 150) {
        priceForClothing -= priceForClothing * 0.10;
    }

    let totalPriceForFilm = priceForDecor + priceForClothing;
    let total = Math.abs(filmBudget - totalPriceForFilm);


    if (totalPriceForFilm <= filmBudget) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${total.toFixed(2)} leva more.`);
    }


}

godzillaVsKong("15437.62",
    "186",
    "57.99"
)