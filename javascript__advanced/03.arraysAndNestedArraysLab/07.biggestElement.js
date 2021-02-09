function biggestElement(matrix) {
    return maxNumber = matrix
        .map(row => Math.max(...row))
        .reduce((a, x) => Math.max(a, x), Number.MIN_SAFE_INTEGER);

}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
));

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));


// function biggestElement(arrays) {
//     let maxNumber = Number.MIN_SAFE_INTEGER;
//
//     arrays.forEach(row => {
//         let currentMax = Number.MIN_SAFE_INTEGER;
//
//         row.forEach(num => {
//             if (currentMax < num) {
//                 currentMax = num;
//             }
//         });
//         if (maxNumber < currentMax) {
//             maxNumber = currentMax;
//         }
//     });
//
//     console.log(maxNumber)
// }
//
// biggestElement([[20, 50, 10],
//     [8, 33, 145]]
// )
//
// biggestElement([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]
// )


// function biggestElement(arrays) {
//
//     let maxNum = arrays.map((row) => Math.max(...row));
//     console.log(maxNum.sort((a, b) => a - b).reverse()[0]);
//
// }
//
// biggestElement([[20, 50, 10],
//     [8, 33, 145]]
// )
//
// biggestElement([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]
// )