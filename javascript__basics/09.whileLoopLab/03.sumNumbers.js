function sumNumbers(a) {
    let num = Number(a[0]);

    let index = 1;
    let total = 0;
    while (total < num) {
        total += Number(a[index]);
        index++;

    }


    console.log(total);


}

sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

