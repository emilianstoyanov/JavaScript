function andProcessors(a, b, c) {
    let numberProcessors = Number(a);
    let numberEmployees = Number(b);
    let workingDays = Number(c);

    let hoursTotal = numberEmployees * workingDays * 8;
    let made = Math.floor(hoursTotal / 3);


    if (made < numberProcessors) {
        console.log(`Losses: -> ${((numberProcessors - made) * 110.10).toFixed(2)} BGN`);
    } else {
        console.log(`Profit: -> ${((made - numberProcessors) * 110.10).toFixed(2)} BGN`);
    }


}


andProcessors(500, 8, 20)
andProcessors(150, 7, 18)