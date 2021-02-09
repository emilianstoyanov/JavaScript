function equalNeighbors(matrice) {
    let count = 0;
    for (let i = 0; i < matrice.length; i++) {
        for (let j = 0; j < matrice[i].length; j++) {

            let current = matrice[i][j];
            let next = matrice[i][j + 1];

            if (i !== matrice.length - 1) {
                let neighbour = matrice[i + 1][j];
                if (current === neighbour) {
                    count++;
                }
            }
            if (current === next) {
                count++;
            }
        }
    }
    return count;
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