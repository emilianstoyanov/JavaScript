function addOrSubtract(input) {

    let modifiedArray = 0;
    let originalArray = 0;
    let saveNum = [];

    for (let i = 0; i < input.length; i++) {
        let searchNum = Number(input[i]);

        if (searchNum % 2 === 0) {
            originalArray += searchNum;
            modifiedArray += Number(input[i]) + i;
            saveNum[i] = Number(input[i]) + i;

        } else {
            originalArray += searchNum;
            modifiedArray += Number(input[i]) - i;
            saveNum[i] = Number(input[i]) - i;
        }


    }
    console.log(saveNum);
    console.log(originalArray);
    console.log(modifiedArray);


}

addOrSubtract([-5, 11, 3, 0, 2])