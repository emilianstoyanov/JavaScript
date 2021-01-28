function solve(steps, footprintLength, speed) {

    let distance = steps * footprintLength;
    let seconds = parseInt(distance / 500) * 60 + Math.round(distance / (speed / 3.6));
    return  result = new Date(seconds * 1000).toISOString().substr(11, 8);

}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));