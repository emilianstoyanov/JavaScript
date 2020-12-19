function magicSum(array, searchNum) {


    while (array.length > 0) {

        let firstNum = array.shift();
        for (let y of array) {
            if (firstNum + y === searchNum) {
                console.log(`${firstNum} ${y}`);
            }
        }
    }


}


magicSum([1, 2, 3, 4, 5, 6],
    6
)