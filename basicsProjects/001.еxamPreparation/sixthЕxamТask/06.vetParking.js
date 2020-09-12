function vetParking(a, b) {
    let countDay = Number(a);
    let countHours = Number(b);
    let total = 0;
    let totalDay = 0;


    for (let d = 1; d <= countDay; d++) {
        for (let h = 1; h <= countHours; h++) {

            if (d % 2 === 0 && h % 2 === 1) {
                totalDay += 2.50;
                total += 2.50;
            } else if (d % 2 === 1 && h % 2 === 0) {
                totalDay += 1.25;
                total += 1.25;
            } else {
                totalDay += 1;
                total += 1;

            }


        }
        console.log(`Day: ${d} – ${totalDay.toFixed(2)} leva`);
        totalDay = 0;


    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}

vetParking(5, 2)