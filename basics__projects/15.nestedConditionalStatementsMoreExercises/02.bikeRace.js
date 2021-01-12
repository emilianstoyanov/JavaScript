function bikeRace(a, b, c) {
    let numberJuniorCyclists = Number(a);
    let numberSeniorCyclists = Number(b);
    let typeRoute = String(c);


    let juniorAmountCollected = 0;
    let seniorAmountCollected = 0;
    let costs = 0;

    if (typeRoute === "trail") {
        juniorAmountCollected = numberJuniorCyclists * 5.50;
        seniorAmountCollected = numberSeniorCyclists * 7;
        let total = juniorAmountCollected + seniorAmountCollected;
        costs = total - (total * 0.05);


    } else if (typeRoute === "downhill") {
        juniorAmountCollected = numberJuniorCyclists * 12.25;
        seniorAmountCollected = numberSeniorCyclists * 13.75;
        let total = juniorAmountCollected + seniorAmountCollected;
        costs = total - (total * 0.05);


    } else if (typeRoute === "road") {
        juniorAmountCollected = numberJuniorCyclists * 20;
        seniorAmountCollected = numberSeniorCyclists * 21.50;
        let total = juniorAmountCollected + seniorAmountCollected;
        costs = total - (total * 0.05);


    } else if (typeRoute === "cross-country") {
        if (numberSeniorCyclists + numberJuniorCyclists >= 50) {
            juniorAmountCollected = numberJuniorCyclists * 6;
            seniorAmountCollected = numberSeniorCyclists * 7.125;
            let total = juniorAmountCollected + seniorAmountCollected;
            costs = total - (total * 0.05);
        } else {
            juniorAmountCollected = numberJuniorCyclists * 8;
            seniorAmountCollected = numberSeniorCyclists * 9.50;
            let total = juniorAmountCollected + seniorAmountCollected;
            costs = total - (total * 0.05);
        }


    }

    console.log(costs.toFixed(2));


}


bikeRace(3, 40, "road")