function equalSumsEvenOddPosition(input) {
    let firstNum = Number(input[0])
    let secondNum = Number(input[1])
    let index = 0

    let even = 0
    let odd = 0
    let saveNum = ""
    for (let i = firstNum; i <= secondNum; i++) {
        let spl = String(i).split("")
        let length = spl.length;
        index = 0;

        while (index < length) {
            if (index % 2 === 0) {
                let numEven = Number(spl[index]);
                even += numEven;
                index++;
            } else {
                let numOdd = Number(spl[index]);
                odd += numOdd;
                index++;
            }

        }
        if (even === odd) {
            saveNum += i + " "
            even = 0;
            odd = 0;
        } else {
            even = 0;
            odd = 0;
        }


    }
    console.log(saveNum);

}


equalSumsEvenOddPosition(["100000",
    "100050"])


