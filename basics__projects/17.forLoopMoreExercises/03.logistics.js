function logistics(input) {
    let count = Number(input.shift());

    let minibus = 0
    let truck = 0
    let train = 0


    for (let i = 1; i <= count; i++) {
        let num = Number(input.shift());

        if (num <= 3) {
            minibus += num;
        } else if (num >= 4 && num <= 11) {
            truck += num;
        } else if (num >= 12) {
            train += num;
        }


    }

    let totalMinibus = minibus * 200;
    let totalTruck = truck * 175;
    let totalTrain = train * 120;

    let totalCount = minibus + truck + train;

    let total = (totalMinibus + totalTruck + totalTrain) / totalCount;

    console.log(total.toFixed(2));
    console.log(`${(minibus / totalCount * 100).toFixed(2)}%`);
    console.log(`${(truck / totalCount * 100).toFixed(2)}%`);
    console.log(`${(train / totalCount * 100).toFixed(2)}%`);

}

logistics(['5', '2', '10', '20', '1', '7'])