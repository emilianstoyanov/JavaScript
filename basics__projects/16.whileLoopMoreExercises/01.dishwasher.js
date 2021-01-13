function dishwasher(input) {
    let amountPreparation = Number(input.shift()) * 750


    let countPlates = 0;
    let countPots = 0;

    let total = 0
    let count = 0;


    let vessels = input.shift();
    while (amountPreparation >= 0) {
        count++;

        if (vessels === "End") {
            break;
        }

        let num = Number(vessels);

        if (count % 3 === 0) {
            countPots += num;
            amountPreparation -= num * 15
            total += num * 15;
        } else {
            countPlates += num;
            amountPreparation -= num * 5
            total += num * 5;
        }

        vessels = input.shift();


    }

    if (amountPreparation < 0) {
        console.log(`Not enough detergent, ${Math.abs(amountPreparation)} ml. more necessary!`);


    } else {
        console.log(`Detergent was enough!`);
        console.log(`${countPlates} dishes and ${countPots} pots were washed.`);
        console.log(`Leftover detergent ${amountPreparation} ml.`);

    }


}

dishwasher([
    '1', '10', '15',
    '10', '12', '13',
    '30'
])