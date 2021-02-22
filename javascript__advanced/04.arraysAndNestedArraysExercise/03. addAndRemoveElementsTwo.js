function addAndRemoveElements(input) {
    let result = [];
    let number = 1;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'add') {
            result.push(number);
        } else if (input[i] === 'remove') {
            result.pop();
        }
        number++;
    }

    return result.length !== 0 ? result.join("\n") : "Empty";


}

console.log(addAndRemoveElements(['add',
    'add',
    'add',
    'add']
));


console.log(addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
));

console.log(addAndRemoveElements(['remove',
    'remove',
    'remove']
));