function circleAreaAndPerimeter(a) {
    let num = Number(a);


    let area = (Math.PI * (num * num)).toFixed(2);
    let perimeterCircle = (2 * Math.PI * num).toFixed(2);


    console.log(area);
    console.log(perimeterCircle);


}


circleAreaAndPerimeter(4.5)