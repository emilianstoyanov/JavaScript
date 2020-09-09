function foodForPets(input) {
    let countDays = Number(input.shift());
    let totalFoods = Number(input.shift());

    let numberCookies = 0;

    let totalDogFoods = 0;
    let totalCatFoods = 0;
    for (let i = 1; i <= countDays; i++) {
        let dogFood = Number(input.shift());
        let catFood = Number(input.shift());

        if (i % 3 === 0) {
            totalDogFoods += dogFood;
            totalCatFoods += catFood;
            numberCookies += (dogFood * 0.10) + (catFood * 0.10);
        } else {
            totalDogFoods += dogFood;
            totalCatFoods += catFood;
        }


    }
    let totalDogAndCardFoods = totalDogFoods + totalCatFoods;
    console.log(`Total eaten biscuits: ${Math.round(numberCookies)}gr.`);
    console.log(`${((totalDogAndCardFoods / totalFoods) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((totalDogFoods / totalDogAndCardFoods) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((totalCatFoods / totalDogAndCardFoods) * 100).toFixed(2)}% eaten from the cat.`);
}

foodForPets([
        '3',   '500',
        '100', '30',
        '110', '25',
        '120', '35'
    ]

)
