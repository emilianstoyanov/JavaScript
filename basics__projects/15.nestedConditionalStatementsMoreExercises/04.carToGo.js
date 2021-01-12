function carToGo(a, b) {
    let budget = Number(a);
    let season = String(b);

    let cl = "";
    let car = "";

    if (budget <= 100) {
        cl = "Economy class";
        if (season === "Summer") {
            car = "Cabrio";
            budget = budget * 0.35;
        } else if (season === "Winter") {
            car = "Jeep";
            budget = budget * 0.65;
        }

    } else if (budget > 100 && budget <= 500) {
        cl = "Compact class";
        if (season === "Summer") {
            car = "Cabrio";
            budget = budget * 0.45
        } else if (season === "Winter") {
            car = "Jeep";
            budget = budget * 0.80;
        }

    } else if (budget > 500) {
        cl = "Luxury class"
        if (season === "Summer" || season === "Winter") {
            car = "Jeep";
            budget = budget * 0.90;
        }


    }


    console.log(`${cl}`);
    console.log(`${car} - ${budget.toFixed(2)}`);


}

carToGo(1010,
    "Winter"
)