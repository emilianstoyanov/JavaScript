function addAndRemoveElements(input) {


    let output = [];
    let count = 1;

    input.forEach(command => {
        if (command === 'add') {
            output.push(count);
        } else {
            output.pop();
        }
        count++;
    })

    output.length === 0 ? console.log('Empty') : console.log(output.join('\n'));

}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']
)


addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)

addAndRemoveElements(['remove',
    'remove',
    'remove']
)