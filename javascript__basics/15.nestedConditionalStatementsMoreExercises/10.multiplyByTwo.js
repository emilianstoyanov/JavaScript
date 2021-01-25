function solve(area) {
    let args = Array.from(arguments)
    let result = 0;
    let i = 0;
    let n = args[i];

    while (n >= 0) {
        result = n * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        n = args[++i];
    }

    if (n < 0) {
        console.log('Negative number!');
    }
}

solve(12, 43.2144, 12.3, 543.23, -20)





// function multiplay(...input){
//     let command = Number(input.shift());
//     let sum = 0;
//     while(true){
//         if(command < 0){
//             console.log("Negative number!");
//             break;
//         }
//         sum = command * 2;
//         console.log(`Result: ${sum.toFixed(2)}`);
//         command = input.shift();
//     }
// }
//
// multiplay(12, 43.2144, 12.3, 543.23, -20)
