function sumFirstAndLast(input) {

    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());

    console.log(firstNum + lastNum);


}

sumFirstAndLast(['20', '30', '40'])