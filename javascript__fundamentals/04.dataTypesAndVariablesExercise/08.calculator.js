function calculator(a, b, c) {
    let number = Number(a);
    let operator = String(b);
    let anotherNumber = Number(c);

    let total = 0;

    if (operator === "+") {
        total = number + anotherNumber;
    } else if (operator === "-") {
        total = number - anotherNumber;
    } else if (operator === "*") {
        total = number * anotherNumber;
    }  else if (operator === "/") {
        total = number / anotherNumber;
    }


    console.log(total.toFixed(2));
}

calculator(10,
    '/',
    5
)