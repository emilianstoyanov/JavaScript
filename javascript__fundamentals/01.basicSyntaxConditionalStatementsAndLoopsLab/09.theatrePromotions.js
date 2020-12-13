function theatrePromotions(a, b) {
    let typeOfDay = String(a);
    let age = Number(b);


    let total = 0;


    if (age < 0 || age > 122) {
        console.log(`Error!`)

    }

    if (typeOfDay === "Weekday") {
        if (age >= 0 && age <= 18) {
            total = 12;
            console.log(`${total}$`)

        } else if (age > 18 && age <= 64) {
            total = 18;
            console.log(`${total}$`)

        } else if (age > 64 && age <= 122) {
            total = 12;
            console.log(`${total}$`)

        }


    } else if (typeOfDay === "Weekend") {
        if (age >= 0 && age <= 18) {
            total = 15;
            console.log(`${total}$`)

        } else if (age > 18 && age <= 64) {
            total = 20;
            console.log(`${total}$`)

        } else if (age > 64 && age <= 122) {
            total = 15;
            console.log(`${total}$`)
            console.log(`${total}$`)

        }

    } else if (typeOfDay === "Holiday") {
        if (age >= 0 && age <= 18) {
            total = 5;
            console.log(`${total}$`)

        } else if (age > 18 && age <= 64) {
            total = 12;
            console.log(`${total}$`)

        } else if (age > 64 && age <= 122) {
            total = 10;
            console.log(`${total}$`)

        }

    }




}

theatrePromotions('Holiday',
    -12)