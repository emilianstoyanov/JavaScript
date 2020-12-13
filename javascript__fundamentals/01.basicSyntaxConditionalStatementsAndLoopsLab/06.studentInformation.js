function studentInformation(a, b, c) {
    let name = String(a);
    let age = Number(b);
    let grade = Number(c);


    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}


studentInformation('John', 15, 5.54678)