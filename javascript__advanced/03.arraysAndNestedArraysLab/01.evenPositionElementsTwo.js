function evenPositionElements(input) {

    let save = [];
    for (let i = 0; i < input.length; i += 2) {
        save[save.length] = input[i]
    }

    return save.join(' ');

}

console.log(evenPositionElements(['20', '30', '40']));
console.log(evenPositionElements(['5', '10']));

