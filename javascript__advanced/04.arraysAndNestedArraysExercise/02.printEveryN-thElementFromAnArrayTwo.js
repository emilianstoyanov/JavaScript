const solve = (arr, step) => {

    return result = arr.filter((el, index) => index % step === 0);

}

console.log(solve(['5',
        '20',
        '31',
        '4',
        '20'],
    2
));

