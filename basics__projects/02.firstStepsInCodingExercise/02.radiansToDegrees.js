function convert(radians) {
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(0));
}

convert("3.1416")