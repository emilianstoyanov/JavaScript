function careOfPuppy(input) {
    let foodsKg = Number(input.shift());

    let foodsInGr = foodsKg * 1000;

    let total = 0;

    while (true) {
        let numStr = input.shift();
        if (numStr === "Adopted") {
            break;
        } else {
            let num = Number(numStr);
            total += num;
        }


    }
    if (total <= foodsInGr) {
        console.log(`Food is enough! Leftovers: ${foodsInGr - total} grams.`);
    } else {
        console.log(`Food is not enough. You need ${total - foodsInGr} grams more.`);

    }

}

careOfPuppy([ '3', '1000', '1000', '1000', 'Adopted' ])