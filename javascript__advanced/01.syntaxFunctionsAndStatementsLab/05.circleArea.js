function circleArea(argument) {


    let inputType = typeof (argument);

    let result = Math.pow(argument, 2) * Math.PI;
    return inputType === 'number' ? result.toFixed(2) : `We can not calculate the circle area, because we receive a ${inputType}.`;


}


console.log(circleArea(5));
console.log(circleArea('name'));