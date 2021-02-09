function equalNeighbors(matrix) {
    let equalElementsCount = getEqualElementsCount(matrix);

    console.log(equalElementsCount);

    function getEqualElementsCount(matrix) {
        let count = 0;

        for(let row = 0; row < matrix.length - 1; row++) {
            for(let col = 0; col < matrix[row].length; col++) {
                let neighborRight = matrix[row][col + 1];
                let neighborDown = matrix[row + 1][col];

                if (matrix[row][col] === neighborRight) {
                    count++;
                }
                if(matrix[row][col] === neighborDown) {
                    count++;
                }
                if (row === matrix.length - 2 && neighborDown === matrix[row + 1][col + 1]) {
                    count++;
                }
            }
        }

        return count;
    }
}

equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);


equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);