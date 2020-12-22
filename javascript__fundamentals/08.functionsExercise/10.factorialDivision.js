function factorial(numOne, numTwo) {

    let totalOne = 1;
    let totalTwo = 1;

    for (let i = 2; i <= numOne; i++) {
        totalOne *= i;
    }

    for (let i = 2; i <= numTwo; i++) {
        totalTwo *= i;
    }


    console.log((totalOne / totalTwo).toFixed(2));
}


factorial(6, 2)