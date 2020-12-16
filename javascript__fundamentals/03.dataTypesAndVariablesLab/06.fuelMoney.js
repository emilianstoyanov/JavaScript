function fuelMoney(a, b, c) {
    let distance = Number(a);
    let passengers = Number(b);
    let priceForOneLiterDiesel = Number(c);

    let neededFuel = (distance / 100) * 7;

    neededFuel += passengers * 0.100;

    let total = neededFuel * priceForOneLiterDiesel;


    console.log(`Needed money for that trip is ${total}lv.`);
}

fuelMoney(260, 9, 2.49)