function commonElements(firstArray, secondArray) {

    for (let f of firstArray) {
        for (let s of secondArray) {
            if (f === s) {
                console.log(f);
            }

        }
    }


}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])