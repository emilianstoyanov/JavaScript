function bombNumbers(sequenceNum, specialNumber) {

    let number = specialNumber[0];
    let power = specialNumber[1];


    for (let i = 0; i <= sequenceNum.length; i++) {

        if (sequenceNum[i] === number) {
            let cut = sequenceNum.splice((i + 1 - power) , (i - 1 + power))
            i = 0;

        }


    }
    console.log(sequenceNum)


}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]

)

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)