function harvest(a, b, c, d) {
    let squareMetersVineyard = Number(a);
    let grapesPerSquareMeter = Number(b);
    let neededLitersOfWine = Number(c);
    let numberOfWorkers = Number(d);

    let totalGrapes = squareMetersVineyard * grapesPerSquareMeter;
    let wine = 0.4 * totalGrapes / 2.5;


    if (wine >= neededLitersOfWine){
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - neededLitersOfWine)} liters left -> ${Math.ceil((wine - neededLitersOfWine) / numberOfWorkers)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(neededLitersOfWine - wine)} liters wine needed.`);
    }

}


harvest(1020,
1.5,
425,
4


)