function stringLength(a, b, c) {

    let sum = a.length + b.length + c.length;

    return `${sum}\n${Math.floor(sum / 3)}`;


}

console.log(stringLength('chocolate', 'ice cream', 'cake'));


