function oddAndEvenSum(num) {
    let spl = String(num).split("");


    let totalEven = 0;
    let totalOdd = 0;


    for (let i = 0; i < spl.length; i++) {
        let num = Number(spl[i]);

        if (num % 2 === 0) {
            totalEven += num;
        } else {
            totalOdd += num;
        }
    }

    console.log(`Odd sum = ${totalOdd}, Even sum = ${totalEven}`);


}

oddAndEvenSum(3495892137259234)