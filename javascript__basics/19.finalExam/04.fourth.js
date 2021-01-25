function catFood(input) {
    let countCats = Number(input.shift());

    let firstGroup = 0;
    let secondGroup = 0;
    let thirdGroup = 0;


    let totalFood = 0;
    for (let i = 0; i < countCats; i++) {
        let gramsFood = Number(input.shift());

        totalFood += gramsFood

        if (gramsFood >= 100 && gramsFood < 200) {
            firstGroup++;
        } else if (gramsFood >= 200 && gramsFood < 300) {
            secondGroup++;
        } else if (gramsFood >= 300 && gramsFood < 400) {
            thirdGroup++;
        }




    }

    console.log(`Group 1: ${firstGroup} cats.`);
    console.log(`Group 2: ${secondGroup} cats.`);
    console.log(`Group 3: ${thirdGroup} cats.`);

    let total = (totalFood / 1000) * 12.45
    console.log(`Price for food per day: ${total.toFixed(2)} lv.`);
}


catFood([
    '6', '102',
    '236', '123',
    '399', '342',
    '222', ''
])