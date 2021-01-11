function pets(a, b, c, d, e) {
    let numberOfDays = Number(a);
    let leftoverFood = Number(b);
    let dogFoodForDay = Number(c);
    let catFoodForDay = Number(d);
    let foodForDayForTurtle = Number(e);

    let needFoodDogKg = numberOfDays * dogFoodForDay;
    let needFoodCatKg = numberOfDays * catFoodForDay;
    let needFoodTurtleGr = numberOfDays * foodForDayForTurtle;
    let needFoodTurtleKg = needFoodTurtleGr / 1000;

    let totalFood = needFoodDogKg + needFoodCatKg + needFoodTurtleKg;


    if (totalFood <= leftoverFood) {
        console.log(`${Math.floor(leftoverFood - totalFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFood - leftoverFood)} more kilos of food are needed.`);
    }


}


pets(5,
    10,
    2.1,
    0.8,
    321
)