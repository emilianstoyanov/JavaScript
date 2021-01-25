function transportPrice(a, b) {
    let num = Number(a);
    let dayOrNight = String(b);


    if (num >= 100) {
        console.log(`${(num * 0.06).toFixed(2)}`);
    } else if (num >= 20) {
        console.log(`${(num * 0.09).toFixed(2)}`);
    } else {

        if (dayOrNight === "day") {
            let startDay = 0.70;
            console.log(`${(startDay + num * 0.79).toFixed(2)}`);
        } else {
            let startNight = 0.70;
            console.log(`${(startNight + num * 0.90).toFixed(2)}`);
        }
    }


}

transportPrice(7,
    "night"
)
