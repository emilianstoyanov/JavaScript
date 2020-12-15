function integerAndFloat(a, b, c) {

    let totalSum = a + b + c;

    // if (totalSum % 1 === 0) {
    //     console.log(`${totalSum} - Integer`);
    // } else {
    //     console.log(`${totalSum} - Float`);
    // }

    let output = totalSum % 1 === 0 ? "Integer" : "Float"
    console.log(`${totalSum} - ${output}`);

}

integerAndFloat(9, 100, 1)