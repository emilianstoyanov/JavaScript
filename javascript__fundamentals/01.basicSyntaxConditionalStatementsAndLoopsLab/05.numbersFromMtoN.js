function numbersFromMtoN(...input) {
    let firstNumM = Number(input.shift());
    let secondNumM = Number(input.shift());


    for (let i = firstNumM; i >= secondNumM; i--) {
        console.log(i)
    }


}

numbersFromMtoN(4, 1)