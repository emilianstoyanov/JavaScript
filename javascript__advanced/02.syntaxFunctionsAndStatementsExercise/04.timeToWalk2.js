function walk(steps, footLength, speed) {

    let distance = steps * footLength;
    let additionalMinutes = Math.floor((distance / 500)) * 60;
    let time = (distance / speed) * 3.6 + additionalMinutes;

    let seconds = Math.round(time % 60);
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(time / 3600);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    function pad(num){

        if (num < 10) {
            return '0' + num;
        }
        else{
            return '' + num;
        }
    }
}



console.log(walk(4000, 0.60, 5));
console.log(walk(2564, 0.70, 5.5));