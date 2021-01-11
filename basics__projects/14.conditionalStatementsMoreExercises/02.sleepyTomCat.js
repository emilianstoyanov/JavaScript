function sleepyTomCat(input) {
    let num = Number(input);

    let holidays = num * 127;
    let workingDays = (365 - num) * 63;

    let total = holidays + workingDays;

    if (30000 > total) {
        let t = 30000 - total;
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(t / 60)} hours and ${t % 60} minutes less for play`);
    } else {
        let l = total - 30000;
        console.log(`Tom will run away`);
        console.log(`${Math.floor(l / 60)} hours and ${l % 60} minutes more for play`);
    }


}

sleepyTomCat(20)