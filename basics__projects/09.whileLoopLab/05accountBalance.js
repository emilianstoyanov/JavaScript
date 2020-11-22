function accountBalance(a) {

    let index = 0;
    let total = 0;
    while (true) {
        let num = a[index];
        index++;

        if (num === "NoMoreMoney") {
            console.log(`Total: ${total.toFixed(2)}`);
            break;
        }

        if (Number(num) < 0) {
            console.log(`Invalid operation!`);
            console.log(`Total: ${total.toFixed(2)}`);
            break;

        }
        console.log(`Increase: ${Number(num).toFixed(2)}`);
        total += Number(num);


    }

}

accountBalance(["120",
    "45.55",
    "-150"])
