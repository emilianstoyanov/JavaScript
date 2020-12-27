function searchForNumber(firstArray, secondArray) {

    let numberOfElementsTake = secondArray.shift();
    let numberElementsDelete = secondArray.shift();
    let numberWeSearch = secondArray.shift();


    let cutArray = firstArray.slice(0, numberOfElementsTake);
    let delElement = cutArray.slice(numberElementsDelete)


    let count = 0;
    for (let i of delElement) {
        if (i === numberWeSearch) {
            count++;
        }
    }


    console.log(`Number ${numberWeSearch} occurs ${count} times.`)


}

searchForNumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)