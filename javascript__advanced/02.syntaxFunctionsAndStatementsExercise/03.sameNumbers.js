function sameNumbers(number) {

    let firstNum = String(number)[0];
    let flag = true;
    let total = 0;
    for (let i = 1; i < String(number).length; i++) {

        let num = String(number)[i];
        if (firstNum !== num) {
            flag = false;
        }
        total += Number(num);


    }

    total += Number(firstNum);
    console.log(flag);
    console.log(total);

}

console.log(sameNumbers(1234));
console.log(sameNumbers(2222222));