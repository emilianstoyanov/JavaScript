function sameNumbers(num) {

    let firstElement = num.toString()[0];
    let flag = true;
    let total = 0;

    for (let n of num.toString()) {

        total += Number(n);
        if (n !== firstElement) {
            flag = false;

        }


    }
    return `${flag}\n${total}`;


}

console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));

