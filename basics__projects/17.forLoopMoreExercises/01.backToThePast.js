function backToThePast(a) {
    let inheritedMoney = Number(a[0]);
    let year = Number(a[1]);

    let ivanYears = 18;


    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            inheritedMoney -= 12000;
        } else {
            inheritedMoney -= 12000 + (ivanYears * 50);

        }

        ivanYears++;


    }
    if (inheritedMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${inheritedMoney.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(inheritedMoney).toFixed(2)} dollars to survive.`);
    }


}


backToThePast(['50000', '1802'])