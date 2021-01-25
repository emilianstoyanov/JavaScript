function bills(input) {
    let count = Number(input.shift());

    let allElectricity = 0;
    let allWater = 0;
    let allInternet = 0;
    let allOthers = 0;

    for (let i = 0; i < count; i++) {
        let num = Number(input.shift());


        allElectricity += num;
        allWater += 20;
        allInternet += 15;

        allOthers += (num + 20 + 15) + ((num + 20 + 15) * 0.20);

    }
    console.log(`Electricity: ${allElectricity.toFixed(2)} lv`);
    console.log(`Water: ${allWater.toFixed(2)} lv`);
    console.log(`Internet: ${allInternet.toFixed(2)} lv`);
    console.log(`Other: ${allOthers.toFixed(2)} lv`);
    console.log(`Average: ${((allElectricity + allWater + allInternet + allOthers) / count).toFixed(2)} lv`);


}

bills(['5', '68.63', '89.25', '132.53', '93.53', '63.22'])