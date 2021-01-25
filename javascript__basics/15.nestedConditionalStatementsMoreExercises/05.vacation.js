function vacation(a, b) {

    let budget = Number(a);
    let season = String(b);

    let location = "";
    let accommodation = "";

    if (budget <= 1000) {
        accommodation = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            budget = budget * 0.65;
        } else if (season === "Winter") {
            location = "Morocco";
            budget = budget * 0.45;
        }

    } else if (budget > 1000 && budget <= 3000) {
        accommodation = "Hut";
        if (season === "Summer") {
            location = "Alaska";
            budget = budget * 0.80;
        } else if (season === "Winter") {
            location = "Morocco";
            budget = budget * 0.60;
        }

    } else if (budget > 3000) {
        accommodation = "Hotel";
        if (season === "Summer") {
            location = "Alaska";
            budget = budget * 0.90;
        } else if (season === "Winter") {
            location = "Morocco";
            budget = budget * 0.90;
        }


    }


    console.log(`${location} - ${accommodation} - ${budget.toFixed(2)}`);


}

vacation(5000,
    "Winter"
)