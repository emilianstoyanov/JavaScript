function specialNumbers(num) {

    for (let i = 1; i <= Number(num); i++) {
        let digitsSum = 0;
        let leng = String(i).length;

        for (let j = 0; j < leng; j++) {
            let numString = String(i);
            digitsSum += Number(numString[j]);
        }

        if (digitsSum === 5 || digitsSum === 7 || digitsSum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);

        }


    }


}

specialNumbers(15)