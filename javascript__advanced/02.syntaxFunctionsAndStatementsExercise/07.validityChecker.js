function validityChecker(first, second, third, forth) {

    let x1 = Number(first);
    let y1 = Number(second);
    let x2 = Number(third);
    let y2 = Number(forth);


    function isValid(x1, y1, x2, y2) {
        let value = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(value);

    }

    function checkValidity(validity) {
        return validity ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${checkValidity(isValid(x1, y1, 0, 0))}\n{${x2}, ${y2}} to {0, 0} is ${checkValidity(isValid(x2, y2, 0, 0))}\n{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(isValid(x1, y1, x2, y2))}`
}


console.log(validityChecker(3, 0, 0, 4));
console.log(validityChecker(2, 1, 1, 1));
