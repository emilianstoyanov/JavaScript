function foodDelivery(a, b, c) {
    let countChickenMenus = Number(a);
    let countFishMenu = Number(b);
    let countVegetarianMenu = Number(c);


    let priceOfChickenMenus = countChickenMenus * 10.35;
    let priceFishMenu = countFishMenu * 12.40;
    let priceVegetarianMenu = countVegetarianMenu * 8.15;

    let totalPriceOfMenu = priceOfChickenMenus + priceFishMenu + priceVegetarianMenu;

    let priceDessert = totalPriceOfMenu * 0.20;

    let total = totalPriceOfMenu + priceDessert + 2.50;


    console.log(`Total: ${total.toFixed(2)}`);


}

foodDelivery(1, 1, 1)
