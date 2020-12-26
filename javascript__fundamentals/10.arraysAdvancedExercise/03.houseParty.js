function houseParty(input) {

    let save = [];

    for (let inp of input) {
        let spl = inp.split(" ");

        let name = spl[0];

        if (spl.length === 3) {
            if (save.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                save.push(name);
            }
        } else {
            if (save.includes(name)) {
                save = save.filter(function (item){
                    return item !== name;
                })


            } else {
                console.log(`${name} is not in the list!`);
            }
        }


    }

    for (let n of save) {
        console.log(n);

    }

}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']


)
