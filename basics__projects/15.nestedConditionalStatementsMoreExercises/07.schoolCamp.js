function schoolCamp(a, b, c, d) {
    let season = String(a);
    let typeGroup = String(b);
    let numberStudents = Number(c);
    let numberNights = Number(d);

    let typeSport = "";
    let total = 0;

    if (season === "Spring") {
        if (typeGroup === "girls") {
            typeSport = "Athletics";
            total = numberStudents * numberNights * 7.20;


        } else if (typeGroup === "boys") {
            typeSport = "Tennis";
            total = numberStudents * numberNights * 7.20;

        } else if (typeGroup === "mixed") {
            typeSport = "Cycling";
            total = numberStudents * numberNights * 9.50;

        }

    } else if (season === "Winter") {
        if (typeGroup === "girls") {
            typeSport = "Gymnastics";
            total = numberStudents * numberNights * 9.60;


        } else if (typeGroup === "boys") {
            typeSport = "Judo";
            total = numberStudents * numberNights * 9.60;

        } else if (typeGroup === "mixed") {
            typeSport = "Ski";
            total = numberStudents * numberNights * 10;

        }

    } else if (season === "Summer") {
        if (typeGroup === "girls") {
            typeSport = "Volleyball";
            total = numberStudents * numberNights * 15;


        } else if (typeGroup === "boys") {
            typeSport = "Football";
            total = numberStudents * numberNights * 15;

        } else if (typeGroup === "mixed") {
            typeSport = "Swimming";
            total = numberStudents * numberNights * 20;

        }

    }


    if (numberStudents >= 50) {
        total = total * 0.50;
    } else if (numberStudents >= 20 && numberStudents < 50) {
        total -= total * 0.15;
    } else if (numberStudents >= 10 && numberStudents <= 20) {
        total -= total * 0.05;
    }


    console.log(`${typeSport} ${total.toFixed(2)} lv.`);
}


schoolCamp("Spring", "mixed", 17, 14)