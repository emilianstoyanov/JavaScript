function fuelTank(a, b) {
    let fuel = String(a).toLowerCase();
    let num = Number(b);

    if (fuel === "diesel" || fuel === "gasoline" || fuel === "gas") {
        if (num >= 25) {
            console.log(`You have enough ${fuel}.`);
        } else if (num < 25) {
            console.log(`Fill your tank with ${fuel}!`);
        }
    } else {
        console.log(`Invalid fuel!`);
    }


}


fuelTank("Kerosene",
    200
)

