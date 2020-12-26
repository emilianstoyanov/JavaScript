function train(input) {

    let copy = input.slice();
    let train = copy[0].split(" ").map(Number);
    let maxCapacity = Number(copy[1]);

    let commands = copy.slice(2);


    for (let command of commands) {
        let commandInfo = command.split(" ");

        if (commandInfo.length === 2) {
            let wagon = Number(commandInfo[1]);
            train.push(wagon);

        } else {
            let passagers = Number(commandInfo[0])

            for (let wagon in train) {
                let currentPassagers = train[wagon];

                if ((passagers + currentPassagers) <= maxCapacity) {
                    train[wagon] += passagers;
                    break;

                }
            }


        }


    }

    console.log(train.join(" "))
}


train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)


// train(['0 0 0 10 2 4',
//     '10',
//     'Add 10',
//     '10',
//     '10',
//     '10',
//     '8',
//     '6']
// )