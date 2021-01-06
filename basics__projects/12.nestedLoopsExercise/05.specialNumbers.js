function specialNumbers(input) {
    let num = Number(input);
    let saveNum = "";


    for (let i = 1111; i <= 9999; i++) {

        let spl = String(i).split("")
        let firstNum = Number(spl[0]);
        let secondNum = Number(spl[1]);
        let thirdNum = Number(spl[2]);
        let fourth = Number(spl[3]);

        if (num % firstNum === 0 && num % secondNum === 0 && num % thirdNum === 0 && num % fourth === 0) {
            saveNum += i + " ";
        }

    }
    console.log(saveNum);

}

specialNumbers(["16"])