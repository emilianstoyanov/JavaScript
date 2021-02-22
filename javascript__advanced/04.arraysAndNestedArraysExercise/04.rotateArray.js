function rotateArray(input, count) {

    for (let i = 0; i < count; i++) {
        let rightElement = input.pop();
        input.unshift(rightElement);

    }
    return input.join(' ');

}


console.log(rotateArray(['1',
        '2',
        '3',
        '4'],
    2
));

console.log(rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
));
