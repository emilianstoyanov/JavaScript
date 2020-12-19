function mergeArrays(firstArray, secondArray) {

    let saveArray = [];

    let leng = firstArray.length;

    for (let i = 0; i < leng; i++) {
        let firstNum = firstArray[i];
        let secondNum = secondArray[i];
        let result = "";

        if (i % 2 === 0) {
            result = (Number(firstNum) + Number(secondNum)) + "";

        } else {
            result = firstNum + secondNum;

        }
        saveArray.push(result);


    }


    console.log(saveArray.join(" - "))

}


mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']
)