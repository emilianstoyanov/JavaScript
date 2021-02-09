function equalNeighbors(array) {

    let counter = 0;

    for (let row = 0; row < array.length - 1; row++) {
        for (let col = 1; col < array[row].length; col++) {

            if (array[row][col] === array[row + 1][col]) {
                counter++;
            }
            if (array[row][col] === array[row][col - 1]) {
                counter++;
            }
        }
    }

    for (let index = 0; index < array[array.length - 1].length; index++) {
        if (array[array.length - 1][index] === array[array.length - 1][index + 1]) {
            counter++;
        }
    }

    for (let index = 0; index < array.length - 1; index++) {
        if (array[index][0] === array[index + 1][0]) {
            counter++;
        }
    }
    return counter;

}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));


console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));