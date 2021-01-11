function firm(a, b, c) {
    let requiredHours = Number(a);
    let daysAvailable = Number(b);
    let numberEmployeesExtraordinary = Number(c);


    let training = daysAvailable - (daysAvailable * 0.10);
    let totalTraining = training * 8;

    let extraordinary = numberEmployeesExtraordinary * (2 * daysAvailable);

    let total = totalTraining + extraordinary;


    if (requiredHours <= total) {
        console.log(`Yes!${Math.floor(total - requiredHours)} hours left.`);

    } else {
        console.log(`Not enough time!${Math.ceil(requiredHours - total)} hours needed.`);
    }


}


firm(99, 3, 1)