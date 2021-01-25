function reportSystem(input) {
    let amount = Number(input.shift());

    let cashPayment = 0;
    let cardPayment = 0;

    let averageCs = 0;
    let averageCc = 0;

    let index = 0;

    while (amount >= 0) {
        let endCommand = input.shift();

        if (endCommand === "End") {
            break;
        }
        let num = Number(endCommand);

        if (index % 2 === 0) {
            if (num <= 100) {
                amount -= num;
                averageCs += num;
                cashPayment++;
                index++;
                console.log(`Product sold!`);
            } else {
                index++
                console.log(`Error in transaction!`);
            }
        } else {
            if (num >= 10) {
                amount -= num;
                averageCc += num;
                cardPayment++;
                index++;
                console.log(`Product sold!`);
            } else {
                index++;
                console.log(`Error in transaction!`);
            }
        }
        if (amount <= 0) {
            break;
        }

    }

    if (amount <= 0) {
        console.log(`Average CS: ${(averageCs / cashPayment).toFixed(2)}`);
        console.log(`Average CC: ${(averageCc / cardPayment).toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);
    }

}


reportSystem(['600', '86', '150', '98', '227', 'End'])


// плащане в брой
// плащане с карта


// •	Ако продуктът надвишава 100лв., за него не може да се плати в брой
// •	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
