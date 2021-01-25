function puppyCare(input) {
    let purchasedQuantityFood = Number(input.shift());


    let total = 0;
    for (let i of input) {

        if (i === `Adopted`) {
            break;
        } else {
            total += Number(i);

        }


    }


    let fromGramsToKilograms = purchasedQuantityFood * 1000;

    if (fromGramsToKilograms >= total) {
        console.log(`Food is enough! Leftovers: ${fromGramsToKilograms - total} grams.`);
    } else {
        console.log(`Food is not enough. You need ${total - fromGramsToKilograms} grams more.`);
    }

}


puppyCare([
    '4', '130',
    '345', '400',
    '180', '230',
    '120', 'Adopted',
    '', ''
])

puppyCare(['3', '1000', '1000', '1000', 'Adopted', '', ''])


puppyCare([
    '2', '999',
    '456', '999',
    '999', '123',
    '456', 'Adopted'
])