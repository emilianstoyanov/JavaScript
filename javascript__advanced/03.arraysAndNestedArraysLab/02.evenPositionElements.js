function evenPositionElements(input) {

    let save = [];
    for (let i = 0; i < input.length; i++) {

        if (i % 2 === 0) {
            save += input[i] + ' ';
        }

    }
    return save;

}

console.log(evenPositionElements(['20', '30', '40']));
console.log(evenPositionElements(['5', '10']));

