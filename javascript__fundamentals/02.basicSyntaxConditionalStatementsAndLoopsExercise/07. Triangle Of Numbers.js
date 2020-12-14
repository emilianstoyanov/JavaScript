function triangle(n) {

    for (let row = 1; row <= n; row++) {

        let output = "";
        for (let number = 1; number <= row; number++) {
            output += `${row}` + " ";

        }
        console.log(output)
    }


}

triangle(3)


// function triangle(n) {
//
//     for (let row = 1; row <= n; row++) {
//         console.log(`${row} `.repeat(row));
//
//     }
//
//
// }
//
// triangle(3)
//_________________________________________

// function triangleOfNumbers(input) {
//     let num = Number(input);
//
//     let dynamically = 1;
//
//     let save = "";
//     for (let i = 1; i <= num; i++){
//         for (let j = 1; j <= i; j++){
//             save += dynamically + " "
//
//         }
//         console.log(save)
//         dynamically++;
//         save = "";
//     }
//
//
// }
//
// triangleOfNumbers("5")