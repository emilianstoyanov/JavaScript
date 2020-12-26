function sorting(input) {

    let sorted = input.sort((a, b) => {
        return a - b
    });

    let saveArray = [];

    while (sorted.length > 0) {

        let rightNum = sorted.pop();
        let leftNum = sorted.shift();

        saveArray.push(rightNum);
        saveArray.push(leftNum);

    }


    console.log(saveArray.join(" "))

}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])