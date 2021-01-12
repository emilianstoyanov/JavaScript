function truckDriver(a, b) {
    let season = String(a);
    let kilometersPerMonth = Number(b);

    let total = 0;

    if (kilometersPerMonth <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            total = (kilometersPerMonth * 0.75) * 4;
            total -= total * 0.10;

        } else if (season === "Summer") {
            total = (kilometersPerMonth * 0.90) * 4;
            total -= total * 0.10;

        } else if (season === "Winter") {
            total = (kilometersPerMonth * 1.05) * 4;
            total -= total * 0.10;

        }

    } else if (kilometersPerMonth > 5000 && kilometersPerMonth <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            total = (kilometersPerMonth * 0.95) * 4;
            total -= total * 0.10;

        } else if (season === "Summer") {
            total = (kilometersPerMonth * 1.10) * 4;
            total -= total * 0.10;

        } else if (season === "Winter") {
            total = (kilometersPerMonth * 1.25) * 4;
            total -= total * 0.10;

        }

    } else if (kilometersPerMonth > 10000 && kilometersPerMonth <= 20000) {
        if (season === "Spring" || season === "Autumn" || season === "Summer" || season === "Winter") {
            total = (kilometersPerMonth * 1.45) * 4;
            total -= total * 0.10;
        }
    }

    console.log(total.toFixed(2));
}

truckDriver("Spring", 16942)