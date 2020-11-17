function touristShop(...input) {
    let budget = Number(input.shift());
    let count = 0;

    let total = 0;
    let nameTheProduct = String(input.shift());
    while (nameTheProduct !== "Stop") {
        count++;
        let priceProduct = Number(input.shift());


        if (count % 3 === 0) {
            priceProduct /=  2;
        }

        if (total + priceProduct > budget) {
            total += priceProduct;
            break;
        } else {
            total += priceProduct;
        }


        nameTheProduct = String(input.shift());
    }


    if (total <= budget) {
        console.log(`You bought ${count} products for ${total.toFixed(2)} leva.`);
    } else {
        console.log(`You don't have enough money!`);
        console.log(`You need ${(total - budget).toFixed(2)} leva!`);
    }

}

touristShop(54,
    "Thermal underwear",
    24,
    "Sunscreen",
    45

)
